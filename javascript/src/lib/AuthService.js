import axios from "axios";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:8000"; // API  Server Domain

    this.signup = this.signup.bind(this);
  }

  async signup(username, password) {
    let headers = {
      "content-type": "application/json"
    };

    return axios.post(
      `${this.domain}/api/auth/register/`,
      {
        username: username,
        password: password
      },
      headers
    );
  }
}
