
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/* =========================================================================================
 * Injectable
 * ========================================================================================= */

@Injectable ()

export class SecurityLibrary { 
    
    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    constructor (private sanitizer: DomSanitizer) { }
    
    /* =========================================================================================
     * GET.
     * ========================================================================================= */

    public getText (strText: string) {
        return this.sanitizer.bypassSecurityTrustHtml(strText.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    }

    public getYoutube (urlYoutube: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlYoutube);
    }

    public getImg (urlImg: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlImg);
    }

    public getVideo (urlVideo: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
    }

    public getHtml (html: string = '') {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public getUrl (urlLink: string) {
        return this.sanitizer.bypassSecurityTrustUrl(urlLink);
    }

    public getScript (script: string) {
        return this.sanitizer.bypassSecurityTrustScript(script);
    }

    public getStyle (style: string) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

}