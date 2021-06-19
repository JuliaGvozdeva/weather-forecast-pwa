/**
 * @template T
 * @param {(T)} x - A generic parameter that flows through to the return type
 * @return {T}
 */
/**
 * @template V
 * @param {(V)} y - A generic parameter that flows through to the return type
 * @return {V}
 */

/**
 * Function that is called for every element of arr
 * @callback callback
 * @param {T} element - Collection element
 * @return {V} - Callback result item
 */

/**
 * The map() method creates a new array populated with the results of
 * calling * a provided function on every element in the calling array.
 * @param {callback} callback - Call function that is
 * called for every element of arr
 * @param {T[]} collection - Source array 
 * @returns {V[]} A new array with each element being the result
 * of the callback function.
 */

const map = (callback, collection) => {
    return collection.reduce(( /** @type {V[]} */ acc, currentValue) => {
        acc.push(callback(currentValue));
        return acc;
    }, []);
};

/**
 * Function is a predicate, to test each element of the array.
 * Return a value that coerces to true to keep the element, or to false otherwise.
 * @callback predicate
 * @param {T} element - Collection element
 * @return {boolean} - Callback result item
 */

/**
 * The filter() method creates a new array with all elements 
 * that pass the test implemented by the provided function.
 * @param {predicate} predicate - Function is a predicate, to test each element of the array.
 * @param {T[]} collection - Source collection
 * @returns {T[]} - A new array with each element being the result
 * of the predicate function.
 */

const filter = (predicate, collection) => {
    return collection.reduce(( /** @type {T[]} */ acc, currentValue) => {
        if (predicate(currentValue)) {
            acc.push(currentValue);
        }
        return acc;
    }, []);
};