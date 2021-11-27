import { AirLineGetModel } from "./apirline.model";

export class PassengerDataGetModel {
    airline: AirLineGetModel[] = [];
    name: string = null;
    trips: number = null;
    _v: string = null;
    _id: string = null;

    toLocal(response): PassengerDataGetModel {
        if (response.airline && response.airline.length) {
            this.airline = response.airline.map((oAirline) => {
                return new AirLineGetModel().toLocal(oAirline);
            })
        } else {
            this.airline = [];
        }
        this.name = response.name ? response.name : null;
        this.trips = response.trips ? response.trips : null;
        this._v = response._v ? response._v : null;
        this._id = response._id ? response._id : null;

        return this;
    }
}