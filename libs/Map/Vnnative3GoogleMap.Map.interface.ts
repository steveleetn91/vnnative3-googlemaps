export default interface Vnnative3GoogleMapInitInterface {
    getMap(div : HTMLElement,options : {
        'camera': {
            target: number,
            zoom: number
          }
    }) : any
}   