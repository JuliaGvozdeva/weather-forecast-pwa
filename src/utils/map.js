const map = (callback, collection) => {
    return collection.reduce((acc, currentValue) => {
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