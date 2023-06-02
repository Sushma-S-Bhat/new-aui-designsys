import type { Meta, StoryObj } from '@storybook/react'

import { AuiButton } from './Button'

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
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}
export const Text: Story = {
  args: {
    variant: 'text',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'contained',
  },
}
export const Medium: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
  },
}
export const Small: Story = {
  args: {
    size: 'small',
    variant: 'contained',
  },
}

export const Create: Story = {
  args: {
    size: 'small',
    variant: 'create',
  },
}

export const Save: Story = {
  args: {
    size: 'small',
    variant: 'save',
  },
}
