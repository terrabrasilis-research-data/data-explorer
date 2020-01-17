import { createAction, props, createSelector } from '@ngrx/store';
import { LayerCon } from './sidebar/sidebar.component';

/**
 * add Layers to list
 */
export const addLayer = createAction(
    '[Map Component] Layers',
    props<object>()
);

/**
 * add addLayerConf
 */
export const addLayerConf = createAction(
    '[Map Component] Layers Conf',
    props<LayerCon>()
);

/**
 * remove Layers enabled in the map
 */
export const removeLayer = createAction(
    '[Map Component] name Layers',
    props<object>()
);