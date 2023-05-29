import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles';
import {Auitheme} from '../src/components/Theme/Theme'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={Auitheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
