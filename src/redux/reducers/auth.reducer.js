import { authConstant } from "../constants";
import Cookie from 'js-cookie'

const initialState = {

    authUrlUser:'/',
    sign_in_up_status:null,
  
    user: localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user')) 
    : {
      name: "",
      email: "",
      picture: "",
    },
  
    UserAuthenticated: localStorage.getItem('user') ? true : false,
     
    authenticating: false,
    loading: false,
  };

  // eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, {type,payload}) => {

    // eslint-disable-next-line default-case
    switch (type) {

        //   student
    case authConstant.LOGIN_USER_REQ:
        state = {
          ...state,
          authenticating: true
        };
        break;
  
      case authConstant.GOOGLE_AUTH_URL_USER:
        state = {
          ...state,
          authenticating: false,
          authUrlUser: payload
        };
        break;
  
      case authConstant.LOGIN_USER_SUCCESS:
        state = {
          ...state,
          student: payload,
          authenticating: false,
          UserAuthenticated: true,
        };
        break;
  
      case authConstant.LOGIN_USER_FAIL:
        state = {
          ...state,
          UserAuthenticated: false,
          authenticating: false
        };
        break;
    }
}