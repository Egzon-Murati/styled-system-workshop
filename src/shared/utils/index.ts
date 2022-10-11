
// Type that removes the "readonly" property of a type
export type Mutable<T> = {
    -readonly [k in keyof T]: T[k];
};
  
export const asMutable = <T>(value: T): Mutable<T> => {
    return value as Mutable<T>;
};