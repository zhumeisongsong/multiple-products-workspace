import { AIAdapter } from '@ai/domain';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export class OpenAIAdapter implements AIAdapter {
  async generateTasks(prompt: string): Promise<string[]> {
    const result = await generateText({
      model: openai('gpt-4o'),
      messages: [{ role: 'user', content: prompt }],
    });

    let fullResponse = '';
    for await (const delta of result.text) {
      fullResponse += delta;
    }

    return fullResponse
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
