// Singleton class to encapsulate
// auth token

class TokenSingleton {
  constructor() {
    if (!TokenSingleton.instance) {
      TokenSingleton.instance = this;
    }
    return TokenSingleton.instance;
  }

  async setToken(token) {
    localStorage.setItem("token", token);
  }

  async getToken() {
    let token = localStorage.getItem("token");
    return token;
  }
}

const tokenSingleton = new TokenSingleton();

Object.freeze(tokenSingleton);

export default tokenSingleton;
