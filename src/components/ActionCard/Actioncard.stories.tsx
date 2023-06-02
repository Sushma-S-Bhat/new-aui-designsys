import type { Meta, StoryObj } from '@storybook/react'

import { ActionCard } from './Actioncard'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ActionCard> = {
  title: 'Example/ActionCard',
  component: ActionCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta
type Story = StoryObj<typeof ActionCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const WithButton: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    hasBtn: true,
  },
}

export const WithoutButton: Story = {
  args: {
    hasBtn: false,
  },
}
