Array.prototype.map = function (callback) {
    return this.reduce(function (acc, currentValue) {
        acc.push(callback(currentValue));
        return acc;
    }, []);
};