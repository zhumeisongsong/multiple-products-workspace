import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const Icon: Story = {
  args: {
    children: '🔥',
    size: 'icon',
  },
};
