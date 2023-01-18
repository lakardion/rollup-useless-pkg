import { CamelCasedPropertiesDeep } from "type-fest";

export const fakeToCamelCase = <T extends object>(obj: T) => {
  return obj as CamelCasedPropertiesDeep<T>;
};
