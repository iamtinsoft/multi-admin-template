export const env = import.meta.env.VITE_ENV || "local";
export const AppName = import.meta.env.VITE_APP_NAME;
export const domain = import.meta.env.VITE_DOMAIN;

export const OtpExpirationTime = Number(import.meta.env.VITE_OTP_EXPIRATION_TIME);
export const DefaultLoginTime = Number(import.meta.env.VITE_DEFAULT_LOGIN_TIME);
export const ExtendedLoginTime = Number(import.meta.env.VITE_EXTENDED_LOGIN_TIME);

export const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
export const SYSTEM_USER_ROLE_STORAGE_KEY = import.meta.env.VITE_SYSTEM_USER_ROLE_STORAGE_KEY;
export const TokenKey = import.meta.env.VITE_TOKEN_KEY;

export const localServer = import.meta.env.VITE_LOCAL_SERVER;
export const demoServer = import.meta.env.VITE_DEV_SERVER;
export const liveServer = import.meta.env.VITE_LIVE_SERVER;

export const ServerUrl =
  env === "local" ? localServer :
    env === "demo" ? demoServer :
      liveServer;

export const localBaseUrl = import.meta.env.VITE_LOCAL_BASE_URL;
export const devBaseUrl = import.meta.env.VITE_DEV_BASE_URL;
export const liveBaseUrl = import.meta.env.VITE_LIVE_BASE_URL;

export const PublicKey =
  env === "local" ? import.meta.env.VITE_DEV_PUBLIC_KEY :
    import.meta.env.VITE_LIVE_PUBLIC_KEY;

export const SecretKey =
  env === "local" ? import.meta.env.VITE_DEV_SECRET_KEY :
    env === "demo" ? import.meta.env.VITE_DEV_SECRET_KEY :
      import.meta.env.VITE_LIVE_SECRET_KEY;

export const SocketUrl = ServerUrl;
export const apiBaseUrl = `${ServerUrl}api`;

export const COLOR_PRIMARY = "#2D6CDF";
export const COLOR_SECONDARY = "#5A5D72";
export const COLOR_SUCCESS = "#2BC48A";
export const COLOR_WARNING = "#F6C343";
export const COLOR_ERROR = "#E03A3E";
export const COLOR_NEUTRAL_ONE = "#F5F7FA";
export const COLOR_NEUTRAL_TWO = "#A0AEC0";

export const dateFormat = import.meta.env.VITE_DATE_FORMAT;
