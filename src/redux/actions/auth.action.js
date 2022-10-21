import { authConstant } from '../constants';
import axios from '../../helper/axiosInstance';
import { Toastify } from '../../App';

export const GetUserAuthUrl = () => {
    return async (dispatch) => {
      try {
        let res = await axios.get('/user/googleAuthUrl');
  
        if (res.data.success === 1) {
          dispatch({
            type: authConstant.GOOGLE_AUTH_URL_USER,
            payload: res.data.url
          });
        } else if (res.data.success === 0) {
          console.log('error');
          Toastify('error', 'Something went wrong');
        }
      } catch (error) {
        console.log(error, 'error');
        Toastify('error', error);
        dispatch({ type: authConstant.LOGIN_USER_FAIL });
      }
    };
  };
  
  export const loginUser = (link ) => {
    return async (dispatch) => {
      dispatch({ type: authConstant.LOGIN_USER_REQ });
  
      try {
        const res = await axios.get(link);
  
        console.log(res);
  
        if (res.data.success === 1) {
          clearLocalStorage();
  
          localStorage.setItem('user', JSON.stringify(res.data.user));
  
          dispatch({
            type: authConstant.LOGIN_USER_SUCCESS,
            payload: res.data.user
          });
  
          return Toastify('success', 'Verified login successfully');
        } else if (res.data.success === 0) {
          console.log('error');
          Toastify('error', res.data.msg);
          return;
        }
      } catch (error) {
        console.log(error, 'error');
  
        Toastify('error', error);
        dispatch({ type: authConstant.LOGIN_USER_FAIL });
      }
    };
  };