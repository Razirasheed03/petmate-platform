export const API_BASE_URL = "http://localhost:4000/api";

export const AUTH_ROUTES = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  SIGNUP: "/auth/signup",
  REFRESH: "/auth/refresh-token",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  RESEND_OTP: "/auth/resend-otp",
  GOOGLE: "/auth/google",
};

export const USER_ROUTES = {
  PROFILE: "/user/profile",
  UPDATE_PROFILE: "/user/update",
};