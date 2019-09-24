import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule[];
  cols: any[];

  constructor(
    private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getSchedule().subscribe(schedule => this.schedule = schedule)
    this.cols=[
      { field: 'task', header: 'Tareas'},
      { field: 'time', header: 'Horario'},
      { field: 'employee', header: 'Empleado'}
    ]
  }

}
