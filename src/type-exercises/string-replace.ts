type SplitSymbol = '!';

export type StringReplace<S1 extends string, S2 extends string, S3 extends string> = S1 extends `${infer P1} ${infer P2}` ?
    P1 extends `${S2}` ? `${S3} ${StringReplace<P2, S2, S3>}` : P1 extends `${Capitalize<`${S2}`>}`
    ? `${Capitalize<`${S3}`>} ${StringReplace<P2, S2, S3>}` : P1 extends Uppercase<`${S2}`>
    ? `${Uppercase<`${S3}`>} ${StringReplace<P2, S2, S3>}` : `${P1} ${StringReplace<P2, S2, S3>}`
    : S1 extends `${S2}${SplitSymbol}` ? `${S3}${SplitSymbol}` : S1 extends `${Capitalize<`${S2}`>}${SplitSymbol}`
    ? `${Capitalize<`${S3}`>}${SplitSymbol} ` : S1 extends `${Uppercase<`${S2}`>}${SplitSymbol}`
    ? `${Uppercase<`${S3}`>}${SplitSymbol} ` : S1;

type ReplacedCommonString = StringReplace<'I hate eating burgers! love!', 'love', 'hate'>; // expected to be `I hate eating burgers!`
type ReplacedCapitalizedString = StringReplace<'I love eating burgers! Love!', 'love', 'hate'>; // expected to be `I hate eating burgers! Hate!`
type ReplacedUppercasedString = StringReplace<'I love eating burgers! LOVE!', 'love', 'hate'>; // expected to be `I hate eating burgers! HATE!`
type ReplacedRandomRegisterString = StringReplace<'I love eating burgers! lOvE!', 'love', 'hate'>; // expected to be `I hate eating burgers! lOvE!`
