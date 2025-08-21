import { LoaderFunctionArgs, SessionData } from 'react-router';

import { COOKIE, ENCRYPT_KEY } from '@/types/enum';

import { commitSession, getSession } from '@/libs/session.server.ts';

export const getSessionData = async ({ request }: LoaderFunctionArgs): Promise<SessionData> => {
    let userEncryptKey = '';
    if (process.env.NODE_ENV === 'production') {
        const url = new URL(request.url);
        userEncryptKey = decodeURI(url.searchParams.get(ENCRYPT_KEY) || '');
    } else {
        userEncryptKey =
            'Dxx3A/E6rutyuUFcv3JBZBoTgn8buT4j7g5/FiqUhC0+FPj+qrkKB3nq2z/rqa1iY7xPNHDZfdiL9NH0RQs8yi3uUj3ADxTpbYcpBQNZK0ebBC2TxwrXqad5cngJ3y3rEE0QdweSQ+yxTbWRczTVoS5s97/iVXlifEpDeilcZ5pU63cKG96ppvcgbWt7MuI8HHOpk8a7VNhiaOjgP273wvf6ySnnuk7/dpjps9A0k+DJncV6dMlr95u9iRiMs6UkDunIdVzvcae89NCPv8IORf/+YvfST1cj1Cnsh5c1ChHMSrURjvVsp5ooFi/wHEzOe03DqFQw+eYGT9QT0E/N8FMyj7b6S8cJrtWufjBpNA==';
    }

    const session = await getSession(request.headers.get(COOKIE));
    if (userEncryptKey) {
        session.set(ENCRYPT_KEY, userEncryptKey);
        await commitSession(session);
        return { userEncryptKey: userEncryptKey, session };
    }

    return { userEncryptKey: session.get(ENCRYPT_KEY) as string, session: null };
};
