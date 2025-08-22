import ky from 'ky';

export const api = ky.create({
    prefixUrl: 'https://nivea.its-newid.net/api/v1',
    timeout: 30000,
});
