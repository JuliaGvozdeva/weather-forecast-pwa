/**
 * The map() method creates a new array populated with the results of
 * calling * a provided function on every element in the calling array.
 * @param {(currentValue: T) => V} callback - Call function that is
 * called for every element of arr
 * @param {T[]} collection - Source collection 
 * @returns {V[]} A new array with each element being the result
 * of the callback function.
 * @template T, V
 */

const map = (callback, collection) => {
  return collection.reduce(( /** @type {V[]} */ acc, currentValue) => {
    return [...acc, callback(currentValue)];
  }, []);
};

export {
  map
};