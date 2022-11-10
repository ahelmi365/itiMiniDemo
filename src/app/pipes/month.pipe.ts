import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: Date, type?: string, nameCase?: string): string | number {
    const monthName: string = value.toLocaleString('default', { month: 'long', });
    const monthNumber = value.getMonth() + 1;

    if (type == "name") {
      if (nameCase == "upper") {
        return monthName.toUpperCase();
      } else if (nameCase == "lower") {
        return monthName.toLowerCase();
      } else {
        return monthName
      }

    } else if (type == "number") {
      return monthNumber;
    } else {
      return monthName;
    }

  }

}
