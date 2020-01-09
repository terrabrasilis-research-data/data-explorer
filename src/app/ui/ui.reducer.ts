import { createReducer, on } from '@ngrx/store';
import {
    addLayer
} from './ui.action';
import { UIState } from './ui.state';

/** initial values to Explore State */
const initialState: UIState = {
  layers: [],
};

export const reducer = createReducer(initialState,
    on(addLayer, (state, payload) => {
        return { ...state, layers: [payload] };
      }),
)