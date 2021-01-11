export const init = {
  loginrequest: false,
  loginsuccess: false,
  loginfailure: false,

  logoutrequest: false,
  logoutsuccess: false,
  logoutfailure: false,

  user: null,
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export default (state = init, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginrequest: true,
        loginsuccess: false,
        loginfailure: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginrequest: false,
        loginsuccess: true,
        loginfailure: true,
        user: action.data,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginrequest: false,
        loginsuccess: false,
        loginfailure: action.error,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutrequest: true,
        logoutsuccess: false,
        logoutfailure: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutrequest: false,
        logoutsuccess: true,
        logoutfailure: true,
        user: null,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        logoutrequest: false,
        logoutsuccess: false,
        logoutfailure: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
