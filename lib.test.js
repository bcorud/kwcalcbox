const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(2) should return true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(6) should return false", () => {
    expect(lib.prime(6)).toBe(false);
});

test("fact(0) should return 1", () => {
    expect(lib.fact(0)).toBe(1);
});

test("fact(5) should return 120", () => {
    expect(lib.fact(5)).toBe(120);
});
