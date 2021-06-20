type PaddingValue = `${number} px`;

type Padding = {
  top: PaddingValue,
  right: PaddingValue,
  bottom: PaddingValue,
  left: PaddingValue
};

const createPadding = (paddingTop: number, paddingRight: number, paddingBottom: number, paddingLeft: number): Padding => {
  const paddingValue: Padding = {
    top: `${paddingTop} px` as PaddingValue,
    right: `${paddingRight} px` as PaddingValue,
    bottom: `${paddingBottom} px` as PaddingValue,
    left: `${paddingLeft} px` as PaddingValue
  };
  return paddingValue;
};

function padding(): Padding;
function padding(padding: number): Padding;
function padding(paddingHorizontal: number, paddingVertical: number): Padding;
function padding(paddingTop: number, paddingHorizontal: number, paddingBottom: number): Padding;
function padding(paddingTop: number, paddingRight: number, paddingBottom: number, paddingLeft: number): Padding;
function padding(top?: number, right?: number, bottom?: number, left?: number): Padding {
  if (top === undefined && right === undefined && bottom === undefined && left === undefined) {
    return createPadding(0, 0, 0, 0);
  } else if (top !== undefined && right === undefined && bottom === undefined && left === undefined) {
    return createPadding(top, top, top, top);
  } else if (top !== undefined && right !== undefined && bottom === undefined && left === undefined) {
    return createPadding(top, right, top, right);
  } else if (top !== undefined && right !== undefined && bottom !== undefined && left === undefined) {
    return createPadding(top, right, bottom, right);
  }
  return createPadding(top as number, right as number, bottom as number, left as number);
}
