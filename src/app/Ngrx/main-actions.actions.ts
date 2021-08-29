import { createAction, props } from '@ngrx/store';

export const premiereActions = createAction(
  '[premiereActions] Load premiereActions'
);


export const updateAwsActions = createAction(
  '[updateAwsActions] Load updateAwsActions',
  props<{ data:{aws_id:string,aws_pw:string} }>()
);

