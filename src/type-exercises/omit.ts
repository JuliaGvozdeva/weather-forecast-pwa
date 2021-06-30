interface Burger {
    name: string;
    numberOfSlices: number;
    meat: string;
}

export type CustomOmit<T extends object, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
}

type VeganBurger = CustomOmit<Burger, 'numberOfSlices' | 'meat'>

type OriginaOmitResult = Omit<Burger, 'numberOfSlices' | 'meat'>