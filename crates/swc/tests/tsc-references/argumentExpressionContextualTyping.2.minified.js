//// [argumentExpressionContextualTyping.ts]
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
function foo(param) {
    var _param_x = _sliced_to_array(param.x, 2), _param_y = (_param_x[0], _param_x[1], param.y);
    _param_y.c, _param_y.d, _param_y.e;
}
foo({
    x: [
        "string",
        1
    ],
    y: {
        c: !0,
        d: "world",
        e: 3
    }
}), foo({
    x: [
        "string",
        1
    ],
    y: {
        c: !0,
        d: "world",
        e: 3
    }
}), [
    "string",
    1,
    !0
].concat(_to_consumable_array([
    "string",
    1,
    !0
])), foo({
    x: [
        "string",
        1
    ],
    y: {
        c: !0,
        d: "world",
        e: 3
    }
});
