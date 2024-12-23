import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export class OpenAIAdapter {
  async generateTasks(prompt: string): Promise<string[]> {
    const result = streamText({
      model: openai('gpt-4o'),
      messages: [{ role: 'user', content: prompt }],
    });

    let fullResponse = '';
    for await (const delta of result.textStream) {
      fullResponse += delta;
    }

    return fullResponse
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
