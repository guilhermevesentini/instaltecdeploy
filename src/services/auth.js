import * as jwt from 'jsonwebtoken';

export const TOKEN_KEY = "@instaltec-Token";

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  return jwt.verify(token, 'q;5vQ_P.=z+>Y8"F', (err, decoded) => {

    if(!decoded) {
      return false;
    }

    return decoded.exp > new Date().getTime() / 1000;
  })


}
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};