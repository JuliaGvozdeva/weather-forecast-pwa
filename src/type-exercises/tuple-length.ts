export type TupleLength<T> = T extends infer R ? R extends Array<any> ? R['length'] : never : never;

type BurgerNames = ['classic', 'peach breeze', 'pig \'N egg', 'bitburger'];
type MeatTypes = ['beef', 'pork'];
type BurgerNamesLength = TupleLength<BurgerNames>; // expected to be `4`
type MeatTypesLength = TupleLength<MeatTypes>; // expected to be `2`
type AbstractArrayLength = TupleLength<string[]>; // expected to be `number`
