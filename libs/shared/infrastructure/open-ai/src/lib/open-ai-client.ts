import { openai } from '@ai-sdk/openai';
import { AIClient } from '@ai/application';
import { generateText } from 'ai';

export class OpenAIClient implements AIClient {
  async generateTasks(prompt: string): Promise<string> {
    const result = await generateText({
      model: openai('gpt-4o'),
      messages: [{ role: 'user', content: prompt }],
    });

    let fullResponse = '';
    for await (const delta of result.text) {
      fullResponse += delta;
    }

    return fullResponse;
  }
}
