import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function listStudentRegister(data, resolve = () => {}) {
  store.dispatch({
    type: types.GET_LIST_STUDENT_REGISTER,
  });
  return fetch(
    "http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/tutor/list-schedule-registe",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: getAuth().token,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.GET_LIST_STUDENT_REGISTER_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.GET_LIST_STUDENT_REGISTER_FAILED,
      });
    });
}
