import '../src/styles/global.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    // 모든 story 공통 지정
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i, // 색상 선택기 적용
                date: /Date$/i, // 날짜 선택기를 적용
            },
        },
    },
};
export default preview;
