function merge<T, V>(firstObj: T, secondObj: V): T & V {
  return { ...firstObj, ...secondObj };
}

export default merge;
