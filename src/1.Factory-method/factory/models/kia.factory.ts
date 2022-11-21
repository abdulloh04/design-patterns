import {VehicleFactory} from "../vehicle.factory";
import {Vehicle} from "../../cars/vehicle";
import {Kia} from "../../cars/models";

export class KiaFactory extends VehicleFactory {
    produceVehicle(): Vehicle {
        return new Kia();
    }
}