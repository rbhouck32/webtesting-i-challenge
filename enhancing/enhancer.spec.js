const enhancer = require("./enhancer.js");

describe("When Enhancement Succeeds", () => {
  let item;
  beforeEach(() => {
    item = { name: "itemName", enhancement: 5, durability: 15 };
  });

  it("item should exist", () => {
    expect(item).toBeDefined();
  });

  it("item enhancement level increases by 1", () => {
    enhancer.success(item);
    expect(item.enhancement).toEqual(6);
  });

  it("item's enhancement level cannot exceed 20", () => {
    item.enhancement = 20;
    enhancer.success(item);
    expect(item.enhancement).toEqual(20);
  });
  it("durability of the item does not change", () => {
    enhancer.success(item);
    expect(item.durability).toEqual(15);
  });
});

describe("When Enhancement Fails", () => {
  let item;
  beforeEach(() => {
    item = { name: "itemName", enhancement: 5, durability: 15 };
  });

  it("item should exists", () => {
    enhancer.fail(item);
    expect(item).toBeDefined();
  });
  it("decreases durability by 5 when enhancement is less than 15", () => {
    enhancer.fail(item);
    expect(item.durability).toEqual(10);
  });
  it("decreases durability by 10 when enhancement is greater than or equal to 15", () => {
    item.enhancement = 15;
    enhancer.fail(item);
    expect(item.durability).toEqual(5);
    item.enhancement = 16;
    item.durability = 15;
    enhancer.fail(item);
    expect(item.durability).toEqual(5);
  });
  it("decreases enhancement by 1 when enhencement is greater than 15", () => {
    item.enhancement = 16;
    enhancer.fail(item);
    expect(item.enhancement).toEqual(15);
  });
});
