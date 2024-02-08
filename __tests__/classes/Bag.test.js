const Bag = require("../../classes/Bag.js");

describe("testing Bag Class", function () {
  test("Bag can create a new instance", () => {
    const newBag = new Bag(45, 1);
    expect(newBag).toBeInstanceOf(Bag);
  });

  test("weight and id have been assigned correctly", () => {
    const newBag = new Bag(45, 1);
    expect(newBag.weight).toBe(45);
    expect(newBag.id).toBe(1);
  });

  test("When a bag is initialized the owner is set to null", () => {
    const newBag = new Bag(45, 1);
    expect(newBag.owner).toBeNull();
  });

  test("Get initial owner by using getOwner()", () => {
    const newBag = new Bag(45, 1);
    expect(newBag.getOwner()).toBeNull();
  });

  test("assignOwner() updates the owner", () => {
    const newBag = new Bag(45, 1);
    newBag.assignOwner("mike");
    expect(newBag.owner).toEqual("mike");
  });
});
