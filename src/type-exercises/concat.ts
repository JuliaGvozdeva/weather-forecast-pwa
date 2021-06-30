// Создайте файл src / type - exercises / concat.ts, и напишите generic тип Concat, который принимает два аргумента:
// - Аргументы должны быть ограничены так, чтобы передать в тип можно было только массивы
//     - На выход вы должны получить массив, состоящий из элементов первого массива и элементов второго массива
// Пример:
// type Result1 = Concat<[1], [2]>; // expected to be [1, 2]
// type Result2 = Concat<['classic'], ['peach breeze', 'bitburger']>; // expected to be ['classic', 'peach breeze', 'bitburger']
// type Result3 = Concat<[], [3]>; // expected to be [3]

type Concat<T extends Array<any>, V extends Array<any>> = [...T, ...V];
export type Result1 = Concat<[1], [2]>;
export type Result2 = Concat<['classic'], ['peach breeze', 'bitburger']>;
export type Result3 = Concat<['str'], [true]>;
export type Result4 = Concat<[], [3]>;

export { };
