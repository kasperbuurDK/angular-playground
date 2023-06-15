import {Component, ViewEncapsulation} from '@angular/core';
import {MatCalendarCellClassFunction } from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class AppComponent {
  title = 'Playground';

    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
      // Only highligh dates inside the month view.
      if (view === 'month') {
        const date = cellDate.getDate();
  
        // Highlight the 1st and 20th day of each month.
        return date === 1 || date === 20 ? 'example-custom-date-class' : '';
      }
  
      return '';
    };


}
