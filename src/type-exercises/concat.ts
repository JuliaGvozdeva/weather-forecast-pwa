type Concat<T extends Array<any>, V extends Array<any>> = [...T, ...V];
export type Result1 = Concat<[1], [2]>;
export type Result2 = Concat<['classic'], ['peach breeze', 'bitburger']>;
export type Result3 = Concat<['str'], [true]>;
export type Result4 = Concat<[], [3]>;

export { };
