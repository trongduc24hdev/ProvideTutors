import * as types from "../constants";

const initialState = {
  data: {},
  error: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.UPDATE_TUTORINFO_API:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case types.UPDATE_TUTORINFO_API_SUCCEED:
      return {
        ...state,
        data: actions.payload,
        loading: false,
      };
    case types.UPDATE_TUTORINFO_API_FAIL:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };

    default:
      return state;
  }
}
