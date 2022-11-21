import {Vehicle} from "../cars/vehicle"

export abstract class VehicleFactory {
    abstract produceVehicle(): Vehicle
}