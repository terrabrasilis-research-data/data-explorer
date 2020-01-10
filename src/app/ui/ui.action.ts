import { createAction, props, createSelector } from '@ngrx/store';
import { Layer } from 'leaflet';
/**
 * add Layers to list
 */
export const addLayer = createAction(
    '[Map Component] Layers',
    props<Layer>()
);