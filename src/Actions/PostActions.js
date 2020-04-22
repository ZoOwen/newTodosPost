import axios from "axios";
export const GETDATAAPI = "GETDATAAPI";
export const GETAPISUCCESS = "GETAPISUCCESS";
export const GETAPIFAILED = "GETAPIFAILED";

export const getDataBegin = () => {
  return {
    type: GETDATAAPI,
  };
};
export const getDataSuccess = (result) => {
  return {
    type: GETAPISUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GETAPIFAILED,
    error,
  };
};

export function getDataApi(search) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .get(`https://5e9f0a2711b078001679c0a2.mockapi.io/identity`)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}

export function postDataAPI(obj) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .post(`https://5e9f0a2711b078001679c0a2.mockapi.io/identity`, obj)
      .then((result) => dispatch(getDataApi()))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}
