import type { User } from './types';

export const createMockUsers = (count: number): User[] => {
  const result: User[] = [];

  for (let i = 0; i <= count; i++) {
    result.push({
      id: `id_${i}`,
      name: `Jhon Dou ${i}`,
      email: `jhon.dou${i}@some.examp`,
      avatar: `/${i}`
    });
  }

  return result;
};
