export const hasText = (value: string): boolean =>
  !isNullOrUndefined(value) &&
  typeof value === "string" &&
  value.trim().length > 0;

export const isNullOrUndefined = (value: unknown): boolean => {
  return value === null || value === undefined;
};
