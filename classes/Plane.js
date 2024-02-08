class Plane {

    #passengars;

    constructor(company, origin, destination){
        this.company = company;
        this.origin = origin;
        this.destination = destination;
        this.#passengars = [];
    }

    getPassengars(){
        return this.#passengars;
    }

    addPassengars(Pax){
        this.#passengars.push(Pax);
    }

}


module.exports = Plane;