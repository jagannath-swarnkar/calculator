import { PagerLoader } from "./rxSubjects";
import { removeCookie } from "./session";




/**
 * @description use this method in request.ts file to parse jwt token
 * @author jagannath
 * @date 30/12/2021
 * @param token string
 * @return string
 */
export const ParseToken = (token: string) => {
    return decodeURIComponent(token).replace(/%20/g, " ");
};



/**
 * @description use this method to clear cookie while logout 
 * you can add more options in this method if needed
 * @author jagannath
 * @date 30/12/2021
 */
export const clearAll = () => {
    removeCookie("refreshToken");
    removeCookie("accessExpiry");
    removeCookie("token");
    removeCookie("uid");
    removeCookie("auth");
};



/**
* @description use this method to start full page loader
* @author jagannath
* @date 30/12/2021
*/
export const startLoader = () => {
    return PagerLoader.next(true);
};

/**
 * @description use this method to stop full page loader
 * @author jagannath
 * @date 30/12/2021
 */
export const stopLoader = () => {
    return PagerLoader.next(false);
};