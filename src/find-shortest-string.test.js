// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(
    findShortestString(["short1", "muchlonger", "short2", "longernum2"])
  ).toBe("short1");
  expect(
    findShortestString([
      "tiny",
      "small",
      "hope",
      "thisisthefirstlongone",
      "thisisnotfirstlongone",
    ])
  ).toBe("tiny");
});
