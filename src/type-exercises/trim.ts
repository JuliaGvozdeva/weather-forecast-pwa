type WhitespaceCharacter = '\n' | ' ';
export type Trim<T extends string> = T extends `${WhitespaceCharacter}${infer V}` ? Trim<V> : T extends `${infer V}${WhitespaceCharacter}` ? Trim<V> : T;
type Trimmed = Trim<'  Hello World  '>; // expected to be 'Hello World'
