import Vnnative3GoogleMapInitInterface, { Vnnative3GoogleMapInitGetMapoption } from "./Vnnative3GoogleMap.Map.interface";
import Vnnative3GoogleMapMarker from "./Vnnative3GoogleMap.Marker";

export default class Vnnative3GoogleMapInit implements Vnnative3GoogleMapInitInterface{
    plugin: any = window; 
    getMap(div: HTMLElement, options: Vnnative3GoogleMapInitGetMapoption): Vnnative3GoogleMapMarker {
        const map = this.plugin.plugin.google.maps.Map.getMap(div, options);
        return new Vnnative3GoogleMapMarker(map);
    }
    setApiKey(apikey : string) : void {
        this.plugin.plugin.google.maps.environment.setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': apikey,
            'API_KEY_FOR_BROWSER_DEBUG': ''  // optional
          });
    }
}