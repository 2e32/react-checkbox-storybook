import type { Preview } from '@storybook/react';

// Общие стили для всего storybook
import '../stories/assets/css/common.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
