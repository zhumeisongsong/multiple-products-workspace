import { SelfCareTopic } from '@self-care-topics/domain';

import { AIClient } from './ai-client';

export class AIService {
  constructor(private readonly aiClient: AIClient) {}

  async generateUserTasks(
    userSelfCareTopics: SelfCareTopic[],
    count: number,
  ): Promise<string[]> {
    const prompt = `Generate ${count} user tasks for the following self care topics: ${userSelfCareTopics.map((topic) => topic.name).join(', ')}`;
    const userTasks = await this.aiClient.generateTasks(prompt);

    return [];
  }
}
