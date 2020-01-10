import { Layer } from 'leaflet'

/** State Model - used in Explore module */
export interface UIState {

    /** tiles with data in cube selected */
    readonly layer: Layer;
   
}