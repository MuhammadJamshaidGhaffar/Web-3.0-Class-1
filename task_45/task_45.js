var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function make_car(manufacturer, modelName, kwargs) {
    return __assign({ manufacturer: manufacturer, modelName: modelName }, kwargs);
}
console.log(make_car("honda civic", "2020", { color: "red", damage: "none" }));
console.log(make_car("honda city", "2000", { color: "white" }));
console.log(make_car("Corola", "2014", { hydraulics: "yes", damage: "none" }));
