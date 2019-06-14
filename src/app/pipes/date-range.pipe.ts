import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'myDateRange'
})
export class DateRangePipe implements PipeTransform {
  transform(startDate: string, endDate?: string): string {
    var returnString = "";
    var newStartDate = new Date(startDate);
    // @ts-ignore
    var newEndDate = (endDate === 0 ? new Date() : new Date(endDate));
    var difference = newEndDate.getTime() - newStartDate.getTime();
    //Build string
    //Check years
    if (Math.floor(difference/31536000000) != 0) {
      //Add years rounded down
      returnString += Math.floor(difference/31536000000);
      //Add months
      if (Math.floor((difference % 31536000000)/2628000000) == 0) {
        returnString += " years";
      } else {
        returnString += "."+Math.floor((difference % 31536000000)/2628000000)+" years";
      }
    } else {
      //Add only months
      returnString += Math.round((difference % 31536000000)/2628000000)+" months";
    }
    return returnString;
  }
}
