import type { Meta, StoryObj } from '@storybook/react'

import AuiButtonNew from './ButtonNew'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AuiButtonNew> = {
  title: 'Example/ButtonNew',
  component: AuiButtonNew,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof AuiButtonNew>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    variant: 'contained',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
}
