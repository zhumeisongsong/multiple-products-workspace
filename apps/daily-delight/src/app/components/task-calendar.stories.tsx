import type { Meta, StoryObj } from '@storybook/react';
import { TaskCalendar } from './task-calendar';

const meta: Meta<typeof TaskCalendar> = {
  component: TaskCalendar,
  title: 'Components/TaskCalendar',
};

export default meta;
type Story = StoryObj<typeof TaskCalendar>;

export const Primary: Story = {
  args: {
    data: [
      {
        id: '1',
        name: 'Task 1',
        description: 'Description for task 1'
      },
      {
        id: '2', 
        name: 'Task 2'
      }
    ],
    date: {
      year: 2025,
      month: 0 // January
    }
  }
};

export const EmptyCalendar: Story = {
  args: {
    data: [],
    date: {
      year: 2025,
      month: 0
    }
  }
};
