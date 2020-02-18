import { Layer } from 'leaflet'
import { LayerCon } from './sidebar/sidebar.component';

/** State Model - used in Explore module */
export interface UIState {

    /** layer to remove in the map */
    readonly layerToDisabled: any;

    /** layer with data */
    readonly layer: Layer;
   
    /** layer conf with data */
    readonly layer_conf: LayerCon;
    
    /** list of ids */
    readonly list_ids: any;
}