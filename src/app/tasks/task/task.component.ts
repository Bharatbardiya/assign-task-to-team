import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';

@Component({
  selector: 'app-task', 
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task !: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    // console.log(this.task.id + "| hello")
    this.complete.emit(this.task.id);
  }

}
