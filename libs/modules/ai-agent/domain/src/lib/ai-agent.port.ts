import { SelfCareTopic } from '@self-care-topics/domain';
import { Task } from '@tasks/domain';

export interface AIAgent {
  generateSelfCareTasks(context: TaskGenerationContext): Promise<Task[]>;
}

export interface TaskGenerationContext {
  topics: SelfCareTopic[];
  count: number;
}
