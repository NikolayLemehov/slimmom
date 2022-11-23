const accessToken = state => state.auth.accessToken;
const refreshToken = state => state.auth.refreshToken;
const sid = state => state.auth.sid;
const isLoggedIn = state => state.auth.isLoggedIn;

export const authSelectors = {
  accessToken,
  refreshToken,
  sid,
  isLoggedIn,
};
