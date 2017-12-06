
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Injectable } from '@angular/core';

/* =========================================================================================
 * Injectable
 * ========================================================================================= */

@Injectable()

export class CustomLibrary { 
    
    /* =========================================================================================
     * คำนวนอายุ
     * ========================================================================================= */
    
    // วัน เดือน ปี ค.ศ
    public dateEng (join: string) {

        var date = [], todate = new Date(), month = (todate.getMonth() + 1);

        date.push(todate.getDate());
        date.push((month.toString().length === 1 ? '0' + month.toString() : month.toString()));
        date.push(todate.getFullYear() + 543);

        return date.join(join);

    }

    // วัน เดือน ปี พ.ศ
    public dateTh (join: string) {

        var date = [], todate = new Date(), month = (todate.getMonth() + 1);

        date.push(todate.getDate());
        date.push((month.toString().length === 1 ? '0' + month.toString() : month.toString()));
        date.push(todate.getFullYear());

        return date.join(join);

    }
    
    // เปลี่ยน ค.ศ. เป็น พ.ศ.
    public formatYearEngtoTh (strFormDate: any, callback: any) {

        var dateBirthday = strFormDate.split('-'); // 2016-02-01
        dateBirthday[0]  = (parseInt(dateBirthday[0]) + 543);

        return callback(dateBirthday.join('-')); // 2560-02-01

    }
    
    // เปลี่ยน พ.ศ. เป็น ค.ศ.
    public formatYearThtoEng (strFormDate: any, callback: any) {

        var dateBirthday = strFormDate.split('-'); // 2560-02-01
        dateBirthday[0]  = (parseInt(dateBirthday[0]) - 543);

        return callback(dateBirthday.join('-')); // 2016-02-01

    }
    
    // คำนวน: อายุ จากวันที่ปัจจุบัน
    public getAge (strFormDate: any, callback: any) {
        
        // var age        = [];
        var fromdate   = new Date(strFormDate);
        var todate     = new Date();

        var yearDiff   = (todate.getFullYear() - fromdate.getFullYear());
        var monthDiff  = (todate.getMonth() - fromdate.getMonth());
        var dayDiff    = (todate.getDate() - fromdate.getDate());
        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) { --yearDiff; }
        if (monthDiff < 0) { monthDiff += 12; }
        
        if (dayDiff < 0) {
            fromdate.setMonth(fromdate.getMonth() + 1, 0); // เพิ่ม 1 เดือน
            dayDiff = (fromdate.getDate() - fromdate.getDate()) + todate.getDate();
            --monthDiff;
        }
        
        /*
        if (yearDiff > 0) { age.push(yearDiff + ' year' + (yearDiff > 1 ? 's ':' ')); }
        if (monthDiff > 0) { age.push(monthDiff + ' month' + (monthDiff > 1 ? 's':'')); }
        if (dayDiff > 0) { age.push(dayDiff + ' day' + (dayDiff > 1 ? 's':'')); }
        if (age.length > 1) { age.splice(age.length - 1, 0,' and '); }
        */
        
        return callback({ year: yearDiff, month: monthDiff, day: dayDiff });

    }
    
    // คำนวน: อายุ จากวันที่ต้องการ
    public getAgeToDate (strFormDate: any, strToDate: any, callback: any) {
        
        var fromdate   = new Date(strFormDate);
        var todate     = new Date(strToDate);

        var yearDiff   = (todate.getFullYear() - fromdate.getFullYear());
        var monthDiff  = (todate.getMonth() - fromdate.getMonth());
        var dayDiff    = (todate.getDate() - fromdate.getDate());
        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) { --yearDiff; }
        if (monthDiff < 0) { monthDiff += 12; }
        
        if (dayDiff < 0) {
            fromdate.setMonth(fromdate.getMonth() + 1, 0); // เพิ่ม 1 เดือน
            dayDiff = (fromdate.getDate() - fromdate.getDate()) + todate.getDate();
            --monthDiff;
        }
        
        return callback({ year: yearDiff, month: monthDiff, day: dayDiff });

    }

    /* =========================================================================================
     * จัดการตัวเลข
     * ========================================================================================= */
    
    // ใส่เครื่องหมาย ,
    public numberAddCommas (number: number) {

        // เท่ากับศูนย์ (0)
        if (typeof number !== 'undefined' && number === 0) { return "-"; }
        
        // แปลงค่าจำนวนเต็มเป็นสตริง
        var intNumber = Math.round(number);
        var strNumber = intNumber.toString();
        
        if (intNumber >= 0) {

            // จำนวนน้อยกว่า 1 - 3 หลัก
            if (strNumber.length <= 3) {
                return strNumber.replace(/(-?\d+)/, "$1.-");
            }
    
            // จำนวนน้อยกว่า 4 - 6 หลัก
            if (strNumber.length > 3 && strNumber.length <= 6) {
                return strNumber.replace(/(-?\d+)(\d{3})/, "$1,$2.-");
            }
    
            // จำนวนมากกว่า 7 - 9 หลัก
            if (strNumber.length > 6 && strNumber.length <= 9) {
                return strNumber.replace(/(-?\d+)(\d{3})(\d{3})/, "$1,$2,$3.-");
            }
    
            // จำนวน 10 หลักขึ้นไป
            if (strNumber.length > 9) {
                return strNumber.replace(/(-?\d+)(\d{3})(\d{3})(\d{3})/, "$1,$2,$3,$4.-");
            }

        } else if (intNumber < 0) {

            intNumber = Math.abs(intNumber);
            strNumber = intNumber.toString();

            // จำนวนน้อยกว่า 1 - 3 หลัก
            if (strNumber.length <= 3) {
                return strNumber.replace(/(-?\d+)/, "-$1.-");
            }
    
            // จำนวนน้อยกว่า 4 - 6 หลัก
            if (strNumber.length > 3 && strNumber.length <= 6) {
                return strNumber.replace(/(-?\d+)(\d{3})/, "-$1,$2.-");
            }
    
            // จำนวนมากกว่า 7 - 9 หลัก
            if (strNumber.length > 6 && strNumber.length <= 9) {
                return strNumber.replace(/(-?\d+)(\d{3})(\d{3})/, "-$1,$2,$3.-");
            }
    
            // จำนวน 10 หลักขึ้นไป
            if (strNumber.length > 9) {
                return strNumber.replace(/(-?\d+)(\d{3})(\d{3})(\d{3})/, "-$1,$2,$3,$4.-");
            }
            
        }

    }

    // เปลี่ยน "ตัวเลข" เป็น "ตัวเลข + เปอร์เซ็น"
    public numberToPercent (number: number) {
        
        if (number === 0) { return '-'; }
        
        var intNumber = Math.round(number);
        var strNumber = intNumber.toString();
        
        // console.log(strNumber, strNumber.length, arrNumber);

        if (number > 0) { 
            return '> ' + strNumber + '%'; 
        }

        if (number < 0) { 
            return '< ' + Math.abs(intNumber) + '%'; 
        }

    }
    
    // เปลี่ยน "ตัวเลข" เป็น "ตัวเลข + ทศนิยม"
    public numberToDecimals (number: number) {
        
        if (number === 0) { return '-'; }
        
        var intNumber = parseFloat(number.toString());
        var strNumber = intNumber.toString();
        var arrNumber = strNumber.split('.');
            
        // console.log(arrNumber);

        if (arrNumber.length === 1) { 
            return arrNumber.join('') + '.00'; 
        }
        
        if (arrNumber.length === 2 && arrNumber[1].length > 1) { 
            return arrNumber.join('.'); 
        }

        if (arrNumber.length === 2 && arrNumber[1].length === 1) { 
            return arrNumber.join('.') + '0'; 
        }

    }

}