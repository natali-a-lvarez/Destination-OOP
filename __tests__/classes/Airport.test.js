const Airport = require("../../classes/Airport.js");
const Plane = require("../../classes/Plane.js");

const {describe, it, expect} = require("@jest/globals");

describe("Airport works as documented", () => {

    const port1 = new Airport("Seatac", "SEA");
    const p1 = new Plane("AS", "SEA", "HNL");
    const p2 = new Plane("AS", "SEA", "BOI");
    const p3 = new Plane("AS", "SEA", "EUG");

    it("Airport name is properly set", () => {
        expect(port1.name).toBe("Seatac");
    })

    it("Airport has array of planes", () => {
        expect(port1.planes).toEqual([]);
    })

    it("Airport has proper code and proper airport code", () => {
        expect(Airport.airportCode).toBe("SEA");
    })
    
    it("Airport returns array of planes", () => {
        expect(port1.getPlanes()).toEqual([]);
    })

    it("Airport can add planes", () => {
        port1.addPlane(p1);
        port1.addPlane(p2);
        port1.addPlane(p3);
        expect(port1.getPlanes()).toEqual([p1, p2, p3]);
    })
})