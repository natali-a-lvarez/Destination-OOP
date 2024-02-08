class Airport {
    static airportCode;
    constructor(name, airportCode){
        this.name = name;
        Airport.airportCode = airportCode;
        this.planes = [];
    }

    getPlanes(){
        return this.planes;
    }

    addPlane(Plane){
        this.planes.push(Plane);
    }
}


module.exports = Airport;