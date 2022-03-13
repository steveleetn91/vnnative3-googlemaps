export interface Vnnative3GoogleMapMarkerOptionMarker {
    'position': {
        lat: number,
        lng: number
      },
    'title': string,
    'icon': {
      'url': string
     }
  }
export default interface Vnnative3GoogleMapMarkerInterface {
    map : any;
    lastItem : any;
    addMarker(options : Vnnative3GoogleMapMarkerOptionMarker) : Vnnative3GoogleMapMarkerInterface 
}