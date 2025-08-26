import { pbkdf2Sync, createDecipheriv } from 'crypto';
import type { LoaderFunctionArgs } from 'react-router';
import { subDays } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { ENCRYPT_KEY } from '@/types/enum.ts';

const PBKDF2_ALGORITHM = 'sha256';
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_LENGTH = 32;
const ENCRYPTION_METHOD = 'aes-256-gcm';
const TIMEZONE = 'Asia/Seoul';

const getDailyKey = (date: Date = new Date()) => {
    const salt = formatInTimeZone(date, TIMEZONE, 'yyyy-MM-dd');
    return pbkdf2Sync(process.env.SESSION_SECRETS ?? '', salt, PBKDF2_ITERATIONS, PBKDF2_LENGTH, PBKDF2_ALGORITHM);
};

const decryptData = (encryptedBase64: string, dailyKeyBytes: Buffer) => {
    try {
        const encryptedBundle = Buffer.from(encryptedBase64, 'base64');

        if (encryptedBundle.length < 29) {
            return false;
        }

        const iv = encryptedBundle.slice(0, 12);
        const tag = encryptedBundle.slice(12, 28);
        const ciphertext = encryptedBundle.slice(28);

        const decipher = createDecipheriv(ENCRYPTION_METHOD, dailyKeyBytes, iv);
        decipher.setAuthTag(tag);

        const decryptedJsonData = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');

        return JSON.parse(decryptedJsonData);
    } catch {
        return false;
    }
};

export const decodeKey = (encryptedBase64: string, referenceDate: Date = new Date()) => {
    const todayKey = getDailyKey(referenceDate);
    let result = decryptData(encryptedBase64, todayKey);
    if (result !== false) {
        return result;
    }

    const yesterday = subDays(referenceDate, 1);
    const yesterdayKey = getDailyKey(yesterday);
    result = decryptData(encryptedBase64, yesterdayKey);

    return result;
};

export const getQueryKey = ({ request }: LoaderFunctionArgs) => {
    let userEncryptKey = '';
    const url = new URL(request.url);
    userEncryptKey = decodeURI(url.searchParams.get(ENCRYPT_KEY) || '');
    if (process.env.NODE_ENV === 'development' && userEncryptKey === '') {
        userEncryptKey =
            'Dxx3A/E6rutyuUFcv3JBZBoTgn8buT4j7g5/FiqUhC0+FPj+qrkKB3nq2z/rqa1iY7xPNHDZfdiL9NH0RQs8yi3uUj3ADxTpbYcpBQNZK0ebBC2TxwrXqad5cngJ3y3rEE0QdweSQ+yxTbWRczTVoS5s97/iVXlifEpDeilcZ5pU63cKG96ppvcgbWt7MuI8HHOpk8a7VNhiaOjgP273wvf6ySnnuk7/dpjps9A0k+DJncV6dMlr95u9iRiMs6UkDunIdVzvcae89NCPv8IORf/+YvfST1cj1Cnsh5c1ChHMSrURjvVsp5ooFi/wHEzOe03DqFQw+eYGT9QT0E/N8FMyj7b6S8cJrtWufjBpNA==';
    }

    return userEncryptKey;
};
