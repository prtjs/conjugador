"use strict";

const conjugar = require("../src");

describe("caso especial:", () => {
	it("-car", () => {
    expect(conjugar("ficar").preteritoPerfeito[0]).toBe("fiquei");
  });
  it("-cer", () => {
    expect(conjugar("conhecer").presente[0]).toBe("conheço");
  });
});
