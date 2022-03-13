import Vnnative3GoogleMapMarkerInterface, { Vnnative3GoogleMapMarkerOptionMarker } from "./Vnnative3GoogleMap.Marker.interface";

export default class Vnnative3GoogleMapMarker implements Vnnative3GoogleMapMarkerInterface {
    map : any;
    lastItem : any;
    constructor(map : any) {
        this.map = map;
    }
    addMarker(options: Vnnative3GoogleMapMarkerOptionMarker): Vnnative3GoogleMapMarker {
        this.map.addMarker(options);
        return this;
    }
}