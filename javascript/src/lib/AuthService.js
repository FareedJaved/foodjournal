import axios from "axios";
import tokenSingleton from "./TokenSingleton";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:8000"; // API  Server Domain
    this.headers = { "content-type": "application/json" };
    this.tokenApi = tokenSingleton;

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.signupSuccess = this.signupSuccess.bind(this);
  }

  async signupSuccess(response) {
    console.log("singup success");
    let token = response["data"].token;
    this.tokenApi.setToken(token);
    return response;
  }

  async signup(username, password) {
    return axios
      .post(
        `${this.domain}/api/auth/register/`,
        {
          username: username,
          password: password
        },
        this.headers
      )
      .then(response => {
        return this.signupSuccess(response);
      });
  }

  async login(username, password) {
    return axios
      .post(
        `${this.domain}/login/`,
        {
          username: username,
          password: password
        },
        this.headers
      )
      .then(response => {
        this.tokenApi.setToken(response.token);
        return response;
      })
      .catch(error => {
        return error;
      });
  }
}
