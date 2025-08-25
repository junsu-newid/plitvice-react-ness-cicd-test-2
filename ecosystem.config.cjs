/* eslint-disable no-undef */
module.exports = {
    apps: [
        // {
        //     name: 'paro',
        //     script: 'npx',
        //     args: 'react-router-serve ./web/paro/build/server/index.js',
        //     exec_mode: 'fork',
        //     instances: 1,
        //     env_stage: {
        //         PORT: 8001,
        //         NODE_ENV: 'staging',
        //     },
        //     env_production: {
        //         PORT: 3001,
        //         NODE_ENV: 'production',
        //     },
        // },
        {
            name: 'ness',
            cwd: './web/ness',
            script: 'npm',
            args: 'run start',
            interpreter: 'none',
            exec_mode: 'fork',
            instances: 1,
            env_stage: {
                PORT: 3002,
                NODE_ENV: 'staging',
            },
            env_production: {
                PORT: 3002,
                NODE_ENV: 'production',
            },
        },
    ],
};
