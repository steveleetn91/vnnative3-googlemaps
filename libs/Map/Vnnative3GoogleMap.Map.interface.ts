export interface Vnnative3GoogleMapInitGetMapoption {
    'camera': {
        target: {
            lat : number,
            lng : number
        },
        zoom: number
      }
}
export default interface Vnnative3GoogleMapInitInterface {
    getMap(div : HTMLElement,options : Vnnative3GoogleMapInitGetMapoption) : any
}   