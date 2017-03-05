import { Component } from '@angular/core';
import {DataModel} from "./data-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dives: DataModel[] = [];
  private _index = 0;
  private _stockDives = DataModel.StockDives

  public enableAdd() {
      return this._index < this._stockDives.length;
  }

  public addDive() {
    if(this.enableAdd()) {
      this.dives.push(this._stockDives[this._index++]);
    }
  }

  public clearDives() {
    this.dives = [];
    this._index = 0;
  }
}

