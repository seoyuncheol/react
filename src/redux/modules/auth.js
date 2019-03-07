import { handleActions, createAction } from "redux-actions";
import { produce } from "immer";
import { pender } from "redux-pender";
import * as AuthAPI from "lib/api/auth";

const CHANGE_INPUT = "auth/CHANGE_INPUT";
const INITIALIZE_FORM = "auth/INITIAL_FORM";

const CHECK_EMAIL_EXISTS = "auth/CHECK_EMAIL_EXISTS"; // 이메일 중복 확인
const CHECK_USERNAME_EXISTS = "auth/CHECK_USERNAME_EXISTS"; // 아이디 중복 확인

export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);
export const checkEmailExists = createAction(
  CHECK_EMAIL_EXISTS,
  AuthAPI.checkEmailExists
); // email
export const checkUsernameExists = createAction(
  CHECK_USERNAME_EXISTS,
  AuthAPI.checkUsernameExists
); // username

const initialState = {
  register: {
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    email: "",
    password: ""
  },
  ...pender({
    type: CHECK_EMAIL_EXISTS,
    onSuccess: (state, action) =>
      state.setIn(["register", "exists", "email"], action.payload.data.exists)
  }),
  ...pender({
    type: CHECK_USERNAME_EXISTS,
    onSuccess: (state, action) =>
      state.setIn(
        ["register", "exists", "username"],
        action.payload.data.exists
      )
  })
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      const { form, name, value } = action.payload;
      console.log(form);

      return produce(state, draft => {
        draft[form][name] = value;
      });
    },
    [INITIALIZE_FORM]: (state, action) => {}
  },
  initialState
);
