import { Component, Input, inject } from '@angular/core';
// import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task', 
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task !: Task;

  taskService = inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }

}
