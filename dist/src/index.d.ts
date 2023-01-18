import { CamelCasedPropertiesDeep } from "type-fest";
export declare const fakeToCamelCase: <T extends object>(obj: T) => CamelCasedPropertiesDeep<T, {
    preserveConsecutiveUppercase: true;
}>;
