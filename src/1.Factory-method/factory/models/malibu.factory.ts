import {VehicleFactory} from "../vehicle.factory";
import {Vehicle} from "../../cars/vehicle";
import {Malibu} from "../../cars/models";

export class MalibuFactory extends VehicleFactory {
    produceVehicle(): Vehicle {
        return new Malibu();
    }
}