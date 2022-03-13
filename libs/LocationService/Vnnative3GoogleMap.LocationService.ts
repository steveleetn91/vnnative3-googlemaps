import Vnnative3GoogleMapLocationServiceInterface, { Vnnative3GoogleMapLocationServiceResponse } from "./Vnnative3GoogleMap.LocationService.interface";

export default class Vnnative3GoogleMapLocationService implements Vnnative3GoogleMapLocationServiceInterface {
    plugin : any = window;
    getMyLocation(options: { enableHighAccuracy: boolean; }, callback: Function): void {
        this.plugin.google.maps.LocationService.getMyLocation(options,(location : Vnnative3GoogleMapLocationServiceResponse) : Function => {
            return callback(location);
        });
    }
}