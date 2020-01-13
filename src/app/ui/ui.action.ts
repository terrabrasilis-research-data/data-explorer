import { createAction, props, createSelector } from '@ngrx/store';

/**
 * add Layers to list
 */
export const addLayer = createAction(
    '[Map Component] Layers',
    props<object>()
);

/**
 * remove Layers enabled in the map
 */
export const removeLayer = createAction(
    '[Map Component] name Layers',
    props<object>()
);