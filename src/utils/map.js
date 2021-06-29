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

/**
 * The filter() method creates a new array with all elements 
 * that pass the test implemented by the provided function.
 * @param {(currentValue: T) => boolean} predicate - Function is a predicate, to test each element of the array.
 * @param {T[]} collection - Source collection
 * @returns {T[]} - A new array with each element being the result
 * of the predicate function.
 * @template T
 */

const filter = (predicate, collection) => {
  let /** @type {T[]} */ mergedArray = [];
  return collection.reduce(( /** @type {T[]} */ acc, currentValue) => {
    if (predicate(currentValue)) {
      mergedArray = [...acc, currentValue];
    }
    return mergedArray;
  }, []);
};