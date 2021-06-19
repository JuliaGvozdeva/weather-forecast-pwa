Array.prototype.map = function (callback) {
    return this.reduce(function (acc, currentValue) {
        acc.push(callback(currentValue));
        return acc;
    }, []);
};

Array.prototype.filter = function (callback) {
    return this.reduce(function (acc, currentValue) {
        if (callback(currentValue)) {
            acc.push(currentValue);
        }
        return acc;
    }, []);
}