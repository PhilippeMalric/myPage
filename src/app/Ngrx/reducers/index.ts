import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { premiereActions, updateAwsActions } from '../main-actions.actions';


export interface MainState {
  aws:{
    aws_id : string;
    aws_pw : string
  }
 
}

export const initialState = {
aws:{
  aws_id : "",
  aws_pw : ""
}


}

const mainReducer = createReducer(
  initialState,
  on(premiereActions,state => ({ ...state})),
  on(updateAwsActions,(state, { data }) => ({ ...state,aws:{aws_id:data.aws_id,aws_pw:data.aws_pw}}))
)




export function reducer(state: MainState | undefined, action: Action) {
  return mainReducer(state, action);
}

export const selectall = (state: any) => state.main;
export const selectAws = (state: any) => state.main.aws;