import {Component, OnInit} from '@angular/core';
import { Visit } from '../models/visit.model';


const today = new Date();

const formatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

/** @title Listbox with complex object as values. */
@Component({
  selector: 'app-listbox',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css'],
  
})
export class ListBoxComponent implements OnInit {
 

  vistList : Visit[] = [ {id: 1, tf: "John", address: "Adressen", visitDate: new Date("16.6.2023") }, {id: 2, tf: "Djon", address: "Et andet sted", visitDate: new Date("17.6.2023") }];
 
  slots = [12, 13, 14, 15].map(
    hour => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hour),
  );

  appointment: readonly Date[] = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14),
  ];

  ngOnInit(): void {
    let hallo = this.vistList.map(
      date => (date.visitDate)
    )
    console.log("🚀 ~ file: list-box.component.ts:40 ~ ListBoxComponent ~ ngOnInit ~ hallo:", hallo)
  }

  compareDate(date1: Date, date2: Date) {
    return date1.getTime() === date2.getTime();
  }

  formatTime(date: Date) {
    return formatter.format(date);
  }

  formatAppointment() {
    return this.appointment.map(a => this.formatTime(a));
  }
}