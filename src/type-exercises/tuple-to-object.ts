export type TupleToObject<T extends ReadonlyArray<string | number>, V> = Record<T[number], V>;

const tuple = ['classic', 'peach breeze', 'pig \'N egg', 'bitburger'] as const;
type ObjectFromTuple = TupleToObject<typeof tuple, number>;
