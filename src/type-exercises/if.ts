type If<T extends boolean, V, U> = T extends true ? V : U;
export type Classic = If<true, 'classic', 'bitburger'>;
export type Bitburger = If<false, 'classic', 'bitburger'>;
