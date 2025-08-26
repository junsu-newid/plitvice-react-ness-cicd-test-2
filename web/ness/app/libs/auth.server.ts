import { type LoaderFunctionArgs, redirect } from 'react-router';
import { ENCRYPT_KEY } from '@/types/enum.ts';
import { decodeKey, getQueryKey } from '@/utils/decryptor.server.ts';
import { commitSession, destroySession, getSession } from '@/libs/session.server.ts';

type LoaderCallback<T> = (
    args: LoaderFunctionArgs & { userEncryptKey: string; isNEWID: boolean; lang: string },
) => Promise<T>;

export const withSession = <T>(callback: LoaderCallback<T>) => {
    return async (args: LoaderFunctionArgs) => {
        const session = await getSession(args.request.headers.get('Cookie'));
        let userEncryptKey = getQueryKey(args as LoaderFunctionArgs);
        const lang = 'en'; // TODO: - language 가져오기
        // const lang = session.get('lang') || 'en';
        console.log('userEncryptKey from loader', `${userEncryptKey}`);
        if (userEncryptKey) {
            session.set(ENCRYPT_KEY, userEncryptKey);
        } else {
            userEncryptKey = session.get(ENCRYPT_KEY);
        }

        if (!userEncryptKey && !args.request.url.includes('/error')) {
            await destroySession(session);
            return redirect('/error');
        }

        const decryptedText = await decodeKey(userEncryptKey);
        const userGroup = decryptedText.userGroup as string[];
        const isNEWID = userGroup.includes('newid') && (userGroup.includes('master') || userGroup.includes('general'));
        if (!isNEWID) {
            return redirect('/deny');
        }

        const data = await callback({ ...args, userEncryptKey, isNEWID, lang });
        const body = JSON.stringify(data);
        const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        headers.append('Set-Cookie', await commitSession(session));

        return new Response(body, {
            status: 200,
            headers: headers,
        });
    };
};
