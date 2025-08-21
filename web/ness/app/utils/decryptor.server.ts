import { pbkdf2Sync, createDecipheriv } from 'crypto';

import { subDays } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const MASTER_SECRET_KEY = 'SwissRedOctopus!';
const PBKDF2_ALGORITHM = 'sha256';
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_LENGTH = 32;
const ENCRYPTION_METHOD = 'aes-256-gcm';
const TIMEZONE = 'Asia/Seoul';

const getDailyKey = (date: Date = new Date()) => {
    const salt = formatInTimeZone(date, TIMEZONE, 'yyyy-MM-dd');
    return pbkdf2Sync(MASTER_SECRET_KEY, salt, PBKDF2_ITERATIONS, PBKDF2_LENGTH, PBKDF2_ALGORITHM);
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
