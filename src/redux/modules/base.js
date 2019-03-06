import { handleActions, createAction } from "redux-actions";
import { produce } from "immer";

const SET_HEADER_VISIBILITY = "base/SET_HEADER_VISIBILITY";

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);

const initialState = {
  header: {
    visible: true
  }
};

export default handleActions(
  {
    [SET_HEADER_VISIBILITY]: (state, action) => {
      return produce(state, draft => {
        draft.header.visible = action.payload;
      });
    }
  },
  initialState
);
