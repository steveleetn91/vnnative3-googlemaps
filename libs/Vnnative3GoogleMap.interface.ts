import Vnnative3GoogleMapLocationService from "./LocationService/Vnnative3GoogleMap.LocationService";
import Vnnative3GoogleMapInit from "./Map/Vnnative3GoogleMap.Map";

export default interface Vnnative3GoogleMapInterface {
    location: Vnnative3GoogleMapLocationService
    map : Vnnative3GoogleMapInit
}