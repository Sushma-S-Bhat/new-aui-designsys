import type { Meta, StoryObj } from '@storybook/react'

import { AuiTypography } from './Typography'

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const meta: Meta<typeof AuiTypography> = {
//   title: 'Example/Typography',
//   component: AuiTypography,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// }

// export default meta
// type Story = StoryObj<typeof AuiTypography>

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const Heading1: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h1',
//     component: 'h1',
//   },
// }

// export const Heading2: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h2',
//     component: 'h2',
//   },
// }
// export const Heading3: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h3',
//     component: 'h3',
//   },
// }
// export const Heading4: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h4',
//     component: 'h4',
//   },
// }
// export const Heading5: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h5',
//     component: 'h5',
//   },
// }
// export const Heading6: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'h6',
//     component: 'h6',
//   },
// }
// export const Subtitle1: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'subtitle1',
//     component: 'p',
//   },
// }
// export const Subtitle2: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'subtitle2',
//     component: 'p',
//   },
// }
// export const paragraph: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     variant: 'body',
//     component: 'p',
//   },
// }
// AuiTypography

const meta: Meta<typeof AuiTypography> = {
  title: 'Common/AuiTypography',
  component: AuiTypography,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AuiTypography>

export const Heading1: Story = {
  args: {
    variant: 'h1',
  },
}
export const Heading2: Story = {
  args: {
    variant: 'h2',
  },
}
export const Heading3: Story = {
  args: {
    variant: 'h3',
  },
}
export const Heading4: Story = {
  args: {
    variant: 'h4',
  },
}
export const Heading5: Story = {
  args: {
    variant: 'h5',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
}
