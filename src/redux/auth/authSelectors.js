const accessToken = state => state.auth.accessToken;
const refreshToken = state => state.auth.refreshToken;
const sid = state => state.auth.sid;

export const authSelectors = {
  accessToken,
  refreshToken,
  sid,
}
