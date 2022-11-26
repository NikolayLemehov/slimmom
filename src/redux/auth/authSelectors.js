const accessToken = state => state.auth.accessToken;
const refreshToken = state => state.auth.refreshToken;
const sid = state => state.auth.sid;
const isLoggedIn = state => state.auth.isLoggedIn;
const userName = state => state.auth.user.username;
const userId = state => state.auth.user.id;
const loginLoading = state => state.auth.loading.logIn;
const registrationLoading = state => state.auth.loading.registration;

export const authSelectors = {
  accessToken,
  refreshToken,
  sid,
  isLoggedIn,
  userName,
  userId,
  loginLoading,
  registrationLoading,
};
