
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Injectable } from '@angular/core';

/* =========================================================================================
 * Injectable
 * ========================================================================================= */

@Injectable()

export class CookieLibrary { 
    
    /* =========================================================================================
     * GET COOKIE
     * ========================================================================================= */

    public getCookie (name: any): Promise<any>  {

        return new Promise((success, error) => {

            try {

                var arr: any = [];
                var cookies = document.cookie.split(';');

                for (var i = 0; i < cookies.length; i++) {
                    var eqPos = cookies[i].split('=');
                    if (eqPos[0] && eqPos[1]){
                        arr[eqPos[0].trim()] = eqPos[1].trim();
                    }
                }

                if (arr[name]) { 
                    return success(arr[name]); 
                } else { 
                    return error(); 
                }

            } catch (err) { 

                return error(); 

            }

        });

    }

    /* =========================================================================================
     * SET COOKIE
     * ========================================================================================= */

    public setCookie (key: string, value: any, expires: string): Promise<any> {

        return new Promise((success, error) => {

            try {

                document.cookie = key + '=' + value + ';expires=' + expires + ';';
                return success({ key: key, value: value, expires: expires }); 

            } catch (err) { 
                
                return error(); 
            
            }

        });

    }
    
    /* =========================================================================================
     * SET COOKIE for SESSION
     * ========================================================================================= */

    public setSessionCookie (key: string, value: any): Promise<any> {

        return new Promise((success, error) => {

            try {

                document.cookie = key + '=' + value + ';';
                return success({ name: name, value: value}); 

            } catch (err) { 

                return error(); 

            }

        });

    }

    /* =========================================================================================
     * CLEAR COOKIE
     * ========================================================================================= */
    
    public clearCookie (name: any): Promise<any> {

        return new Promise((success, error) => {

            try {

                document.cookie = name + '=;expires=' + (new Date()).toUTCString() + ';';
                return success({ name: name, expires: (new Date()).toUTCString()}); 

            } catch (err) {

                return error(); 

            }

        });

    }

}