import React, {useEffect} from 'react';
import Spinner from "components/@vuexy/spinner/Loading-spinner";
import {useDispatch} from "react-redux";
import {route} from "app/router/urls/routes";
import {useHistory} from "react-router-dom";
import {useSelectToken} from "app/redux/auth/selectors/selectToken";
import {actionLogout} from "app/redux/auth/actions/action_logout";
import {logout} from "app/crud/auth/logout";

const ViewLogout = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelectToken();

  useEffect(()=>{
    const doLogout = async () => {
      try {
        await logout();
      } catch (e) {

      }
    }
      // noinspection JSIgnoredPromiseFromCall
      doLogout();
    dispatch(actionLogout());
  },[])

  useEffect(() => {
    if(!token) {
      history.replace(route['auth.login'])
    }
  }, [token])

  return (<Spinner/>);
};

export default ViewLogout;
