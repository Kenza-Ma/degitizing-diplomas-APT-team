import Cookie from "js-cookie";

const SetCookie = (cookiename, cookievalue) => {
  Cookie.set(cookiename, cookievalue, {
    expires: 1,
    secure: true,
  });
};

export default SetCookie;
