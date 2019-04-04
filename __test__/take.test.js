var M = require("../src");

describe("take", function() {
  it("数组调用", function() {
    const testArr = [1, 2, 3, 4];
    expect(M.take(1)(testArr)).toEqual([1]);
    expect(M.take(2)(testArr)).toEqual([1, 2]);
    expect(M.take(3)(testArr)).toEqual([1, 2, 3]);
  });

  it("字符串调用", function() {
    const testStr = "abc";
    expect(M.take(1, testStr)).toBe("a");
    expect(M.take(2, testStr)).toBe("ab");
    expect(M.take(3, testStr)).toBe("abc");

    expect(M.take(-1, testStr)).toBe("abc");
    expect(M.take(-2, testStr)).toBe("abc");
    expect(M.take(0, testStr)).toBe("");
    expect(M.take(-1, testStr)).toBe("abc");
    expect(M.take(-2, testStr)).toBe("abc");
  });
});
