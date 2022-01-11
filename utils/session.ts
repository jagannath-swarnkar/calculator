import Cookies from "js-cookie";

export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    Cookies.set(key, value, {
      expires: 1,
      path: "/",
    });
  } else {
    console.error("setCookie failed");
  }
};

export const removeCookie = (key: string) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string) => {
  return process.browser ? getCookieFromBrowser(key) || "" : "";
};

export const getCookiees = (key: string, req: any) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key: string) => {
  return Cookies.get(key);
};

const getCookieFromServer = (key: string, req: any) => {
  if (!req || !req.headers || !req.headers.cookie) {
    return null;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return null;
  }
  return rawCookie.split("=")[1];
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
}