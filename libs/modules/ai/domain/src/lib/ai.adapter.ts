export interface AIAdapter {
  generateTasks(prompt: string): Promise<string[]>;
}
