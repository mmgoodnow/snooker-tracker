import { environment } from "../../environments/environment";
const NODE_URL = environment.NODE_URL;

export const USER_URL = NODE_URL + "/api/user/";
export const LOGIN_URL = NODE_URL + "/api/login/";
export const LOGOUT_URL = NODE_URL + "/api/logout/";
export const PROFILE_URL = NODE_URL + "/api/profile/";
export const REGISTER_URL = NODE_URL + "/api/register/";

export const PLAYER_URL = NODE_URL + "/api/player/";
export const RANKINGS_URL = NODE_URL + "/api/rankings/";
export const SUBSCRIPTION_URL = NODE_URL + "/api/subscription/";
