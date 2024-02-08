const Plane = require("../../classes/Plane.js");
const {describe, it, expect} = require("@jest/globals");

describe("Test suite for Plane", () => {
    const p1 = new Plane("AS", "SEA", "JFK");

    it("Planes have an owner company", () => {
        expect(p1.company).toBe("AS");
    })

    it("Planes have an origin", () => {
        expect(p1.origin).toBe("SEA");
    })

    it("Planes have a destination", () => {
        expect(p1.destination).toBe("JFK");
    })

    it("Planes start with no pax", () => {
        expect(p1.getPassengars()).toEqual([]);
    })

    it("Planes can add pax", () => {
        p1.addPassengars("Frank");
        expect(p1.getPassengars()).toEqual(["Frank"]);
    })

    
})