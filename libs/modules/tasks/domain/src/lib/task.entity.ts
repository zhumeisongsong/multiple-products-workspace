import { SelfCareTopic } from '@self-care-topics/domain';

export type Task = {
  id: string;
  name: string;
  description?: string;
  categories: SelfCareTopic[];
};
