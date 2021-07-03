export type SnakeToCamel<S extends string> =
    S extends `${infer P1}_${infer P2}`
      ? `${Lowercase<P1>}${Capitalize<SnakeToCamel<P2>>}`
      : Lowercase<S>;

type BurgersAreAwesome1 = SnakeToCamel<'burgers_are_awesome'>; // expected to be `buregersAreAwesome`
type BurgersAreAwesome2 = SnakeToCamel<'BurgersAre_awesome'>; // expected to be `buregersareAwesome`
type BurgersAreAwesome4 = SnakeToCamel<'BURGERS_ARE_AWESOME'>; // expected to be `buregersAreAwesome`
type BurgersAreAwesome5 = SnakeToCamel<'burgersareawesome'>; // expected to be `burgersareawesome`
type BurgersAreAwesome6 = SnakeToCamel<'BurgerSareawesoMe'>; // expected to be `burgersareawesome`
