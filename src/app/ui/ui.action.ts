import { createAction, props, createSelector } from '@ngrx/store';

/**
 * add Layers to list
 */
export const addLayer = createAction(
    '[Map Component] Layers',
    props<{ layers: Object[] }>()
);