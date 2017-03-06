/**
 * Created by stefan.trajkovic on 5.3.2017..
 */
import {Component} from '@angular/core';

@Component({
  selector: 'divelog'
})
export class DataModel {
  site: string;
  location: string;
  depth: number;
  time: number;

  static StockDives: DataModel[] = [
    {
      site: 'Rhodos',
      location: 'Rhodos, Greece',
      depth: 72,
      time: 54
    },
    {
      site: 'Ponte Mahoon',
      location: 'Maehbourg, Mauritius',
      depth: 54,
      time: 38
    },
    {
      site: 'Molnar Cave',
      location: 'Budapest, Hungary',
      depth: 98,
      time: 62
    }];
}
