import React, { PureComponent } from "react";
import ENDPOINTS from "./config/endpoints";
import {BASE_URL} from './config/endpoints'
import "./index.css";
import Cookies from "js-cookie";

export const AuthContext = React.createContext();

export const defaultState = {
  authLoading: true,
  loggedIn: false,
  user: null,
  notificationCount: 0,
};

class AuthWrapper extends PureComponent {
  state = defaultState;

async componentDidMount() {
    //this.checkToken();
    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:3000');

    // const requestOptions = {
    //     mode: 'cors',
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({ email: "nick.xu@gracenewcoder.com",
    //     password: "A123456a:" }),
    // };
    // const response = await fetch('http://localhost:5000/api/Account/signin', requestOptions);
    // const responseBody = await response.json();
    // Cookies.set("commandToken",responseBody.access_Token);



  }


  checkToken = async () => {
    // let url=BASE_URL+ENDPOINTS.GET_USER;
    let url="http://localhost:5000/api/Account/signin";
    let method = "POST";
    let body =  JSON.stringify({   "email": "nick.xu@gracenewcoder.com",
    "password": "A123456a:"
});
const headers = {
    "Content-Type": "application/json",
    "Accept": '*/*'
  }

    let options = {
        method,
        headers,
        body,
        mode: 'no-cors'
      };
      let id=123;

    try {
    //   const response = await fetch("http://localhost:5000/api/Account/signin",{
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: { 'Content-type': 'application/json'},
    //     body: JSON.stringify({ "email": 'nick.xu@gracenewcoder.com',
    //     "password": 'A123456a:' })
    // }
    //   );
    const response=await fetch(url, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: "nick.xu@gracenewcoder.com",
            password: "A123456a:",
         }), mode:'no-cors'
    });

      if (response?.isSuccess) {
        this.setState({
          authLoading: false,
          loggedIn: true,
          user: response.user
        }, this.getNotificationCount);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        authLoading: false
      });
    }
  };




  sendLogin = async (email, password) => {
    const settingObj = {
      email,
      password
    };

    try {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        // headers.append('Origin','http://localhost:3000');
    
        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ email: "nick.xu@gracenewcoder.com",
            password: "A123456a:" }),
        };
        const response = await fetch('http://localhost:5000/api/Account/signin', requestOptions);
        const responseBody = await response.json();
        

    //   if (!response?.isSuccess) {
    //     if (response?.message || response?.json?.message) {
    //       Notification.displayErrorMessage(
    //         <FormattedMessage id={response.message || response.json.message} />
    //       );
  
    //       throw Error(response.message || response.json.message);
    //     }

    //     // TODO Add default error message

    //     return false;
    //   }

        Cookies.set("commandToken",responseBody.access_Token);

    //   await this.checkToken();
      
      return true;
    } catch (error) {
    //   Notification.displayErrorMessage(<FormattedMessage id="account.notifications.errors.loginFailure" />);
    console.log("login error");

      return false;
    }
  };

  

//   sendLogout = async () => {    
//     // TODO: Change back to Login once we leave early access.
//     await navigate("/explore", { replace: true });

//     window.setTimeout(() => {
//       Cookies.remove("bitToken");

//       this.setState({
//         loggedIn: false,
//         user: null,
//       });
//     }, 200);

//     return true;
//   };

  render() {
    const { authLoading } = this.state;

    return (
      <>
        <AuthContext.Provider
          value={{
            ...this.state,
            sendLogin: this.sendLogin,
            sendLogout: this.sendLogout,
          }}
        >
            {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}


// const redirectOnFailure = loggedIn => { 
//   if (!loggedIn) {
//     navigate("/401");
//   } 
// };

// eslint-disable-next-line react/display-name
export const AuthConnect = (WrappedComponent) => props => (
  <AuthContext.Consumer>
      {value => <WrappedComponent {...value} {...props} />}
  </AuthContext.Consumer>
);

export default AuthWrapper;
