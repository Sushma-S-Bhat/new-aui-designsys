import type { Meta, StoryObj } from '@storybook/react'

import { AuiChip } from './Chip'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AuiChip> = {
  title: 'Example/Chip',
  component: AuiChip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof AuiChip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    variant: 'filled',
    // color: 'default',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}
// export const Success: Story = {
//   args: {
//     color: 'success',
//   },
// }

// export const Failure: Story = {
//   args: {
//     color: 'error',
//   },
// }
export const Big: Story = {
  args: {
    size: 'medium',
  },
}
export const Small: Story = {
  args: {
    size: 'small',
  },
}
