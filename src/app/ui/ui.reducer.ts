import { createReducer, on } from '@ngrx/store';
import {
    addLayer,
    removeLayer
} from './ui.action';
import { UIState } from './ui.state';

/** initial values to Explore State */
const initialState: UIState = {
  layer: null,
  layerToDisabled: null,
};

export interface AppState {
  ui: UIState;
}

export const reducer = createReducer(initialState,
    on(addLayer, (state, payload) => {
      return { ...state, layer: payload };
    }),
    on(removeLayer, (state, payload) => {
      return { ...state, layerToDisabled: payload };
    }),
)