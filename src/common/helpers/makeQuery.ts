export const makeQuery = <T>(query: T) =>
  Object.entries(query)
    .map(([key, val]) => `${key}=${val || ''}`)
    .join('&');
