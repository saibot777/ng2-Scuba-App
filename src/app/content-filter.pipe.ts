/**
 * Created by stefan.trajkovic on 5.3.2017..
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
  transform(value: any[], searchFor: string) : any[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLocaleLowerCase();
    return value.filter(dive =>
      dive.site.toLocaleLowerCase().indexOf(searchFor) >= 0 ||
      dive.location.toLocaleLowerCase().indexOf(searchFor) >= 0 ||
      dive.depth.toString().indexOf(searchFor) >= 0 ||
      dive.time.toString().indexOf(searchFor) >= 0);
  }
}
