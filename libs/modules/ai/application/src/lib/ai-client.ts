export interface AIClient {
  generateTasks(prompt: string): Promise<string>;
}
