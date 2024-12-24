export const UserTaskStatusEnum = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const;

export type UserTaskStatusEnum =
  (typeof UserTaskStatusEnum)[keyof typeof UserTaskStatusEnum];
