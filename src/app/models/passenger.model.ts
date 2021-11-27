import { PassengerDataGetModel } from "./passenger-data.model";

export class PassengerGetModel {
    data: PassengerDataGetModel[] = [];
    totalPages: number = null;
    totalPassengers: number = null;

    toLocal(response): PassengerGetModel {
        if (response.data && response.data.length) {
            this.data = response.data.map((oData) => {
                return new PassengerDataGetModel().toLocal(oData);
            })
        } else {
            this.data = [];
        }
        this.totalPages = response.totalPages ? response.totalPages : null;
        this.totalPassengers = response.totalPassengers ? response.totalPassengers : null;

        return this;
    }
}