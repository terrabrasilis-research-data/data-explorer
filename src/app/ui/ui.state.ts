import { Layer } from 'leaflet'

/** State Model - used in Explore module */
export interface UIState {

    /** layer with data */
    readonly layer: Layer;
   
}