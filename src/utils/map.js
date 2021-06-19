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

const filter = (predicate, collection) => {
    return collection.reduce((acc, currentValue) => {
        if (predicate(currentValue)) {
            acc.push(currentValue);
        }
        return acc;
    }, []);
};