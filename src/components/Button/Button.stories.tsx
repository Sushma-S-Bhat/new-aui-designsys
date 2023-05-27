import type { Meta, StoryObj } from '@storybook/react'

import AuiButton from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AuiButton> = {
  title: 'Example/Button',
  component: AuiButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof AuiButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}
export const Tertiary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
  },
}
