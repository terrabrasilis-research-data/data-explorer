import { Layer } from 'leaflet'

/** State Model - used in Explore module */
export interface UIState {

    /** layer to remove in the map */
    readonly layerToDisabled: any;

    /** layer with data */
    readonly layer: Layer;
   
}