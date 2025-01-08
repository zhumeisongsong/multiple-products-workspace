import { AIClient } from '@ai/application';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

export class OpenAIClient implements AIClient {
  private openai;

  constructor() {
    this.openai = createOpenAI({
      // https://nx.dev/recipes/react/use-environment-variables-in-react
      apiKey: import.meta.env['VITE_OPENAI_API_KEY'],
    });
  }

  async generateTasks(prompt: string): Promise<string> {
    const result = await generateText({
      model: this.openai('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompt }],
    });

    let fullResponse = '';
    for await (const delta of result.text) {
      fullResponse += delta;
    }

    return fullResponse;
  }
}
