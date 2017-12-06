
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/* =========================================================================================
 * Setting
 * ========================================================================================= */

import { AppSetting } from '../common/app.setting';

/* =========================================================================================
 * Injectable
 * ========================================================================================= */

@Injectable()

export class ApiLibrary {

    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    public constructor (public http: Http, public app: AppSetting) { /* ..... */ }

    /* =========================================================================================
     * METHOD GET
     * ========================================================================================= */

    public get (url: string = null): Promise<any> {

        return new Promise((success, error) => {

            var headers = new Headers();
            if (this.app.token !== null) { headers.append('x-access-token', this.app.token); }
            var options = new RequestOptions({ headers: headers });

            this.http.get(this.app.apiUrl + url, options)
                .map((res: Response) => res.json())
                .subscribe((response: any) => {
                    if (typeof response !== 'undefined') {
                        return success(response);
                    } else {
                        return error(null);
                    }
                }, (err: any) => { return error(err); }
            );

        });

    }

    /* =========================================================================================
     * METHOD POST (SAVE)
     * ========================================================================================= */

    public post (url: string = null, params: object): Promise<any> {

        return new Promise((success, error) => {

            var headers = new Headers();
            if (this.app.token !== null) { headers.append('x-access-token', this.app.token); }
            var options = new RequestOptions({ headers: headers });

            this.http.post(this.app.apiUrl + url, params, options)
                .map((res: Response) => res.json())
                .subscribe((response: any) => {
                    if (typeof response !== 'undefined') {
                        return success(response);
                    } else {
                        return error(response);
                    }
                }, (err: any) => { return error(err); }
            );

        });

    }

    /* =========================================================================================
     * METHOD PUT (UPDATE)
     * ========================================================================================= */

    public put (url: string = null, params: object): Promise<any> {

        return new Promise((success, error) => {

            var headers = new Headers();
            if (this.app.token !== null) { headers.append('x-access-token', this.app.token); }
            var options = new RequestOptions({ headers: headers });

            this.http.put(this.app.apiUrl + url, params, options)
                .map((res: Response) => res.json())
                .subscribe((response: any) => {
                    if (typeof response !== 'undefined') {
                        return success(response);
                    } else {
                        return error(response);
                    }
                }, (err: any) => { return error(err); }
            );

        });

    }

    /* =========================================================================================
     * METHOD DELETE
     * ========================================================================================= */

    public delete (url: string = null): Promise<any> {

        return new Promise((success, error) => {

            var headers = new Headers();
            if (this.app.token !== null) { headers.append('x-access-token', this.app.token); }
            var options = new RequestOptions({ headers: headers });

            this.http.delete(this.app.apiUrl + url, options)
                .map((res: Response) => res.json())
                .subscribe((response: any) => {
                    if (typeof response !== 'undefined') {
                        return success(response);
                    } else {
                        return error(response);
                    }
                }, (err: any) => { return error(err); }
            );

        });

    }

}