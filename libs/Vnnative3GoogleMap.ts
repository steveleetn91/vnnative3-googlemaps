import Vnnative3GoogleMapLocationService from "./LocationService/Vnnative3GoogleMap.LocationService";
import Vnnative3GoogleMapInit from "./Map/Vnnative3GoogleMap.Map";
import Vnnative3GoogleMapInterface from "./Vnnative3GoogleMap.interface";

export default class Vnnative3GoogleMap implements Vnnative3GoogleMapInterface {
    location: Vnnative3GoogleMapLocationService = new Vnnative3GoogleMapLocationService;
    map : Vnnative3GoogleMapInit = new Vnnative3GoogleMapInit
}