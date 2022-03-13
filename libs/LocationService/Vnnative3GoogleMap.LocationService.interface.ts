export interface Vnnative3GoogleMapLocationServiceResponse {
    latLng : {
        lat : number,
        lng: number
    },
    speed : number,
    time : number,
    bearing : any 
}
export default interface Vnnative3GoogleMapLocationServiceInterface {
    getMyLocation(options : {
        enableHighAccuracy: boolean
    },callback: Function) : void 
}