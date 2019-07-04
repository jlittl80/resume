import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe ({
  name: 'myDateRange'
})
export class DateRangePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(startDate: string, endDate?: string): SafeHtml {
    var returnString = "";
    var newStartDate = new Date(startDate);
    // @ts-ignore
    var newEndDate = (endDate === 0 ? new Date() : new Date(endDate));
    var difference = newEndDate.getTime() - newStartDate.getTime();
    //Build string
    //Check how many years
    if (Math.round(difference/31536000000) != 0) {
      //Add years rounded up/down
      returnString += Math.round(difference/31536000000)+"<sup>ish</sup> year"+(Math.round(difference/31536000000) != 1 ? "s" : "");
    } else {
      //We dont have years, only months
      returnString += Math.round((difference % 31536000000)/2628000000)+" months";
    }
    return this._sanitizer.bypassSecurityTrustHtml(returnString);
  }
}
