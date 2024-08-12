import { Component, Input} from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input() userId!: string;
    @Input() name!: string;
    // @Output() addtask = new EventEmitter<string>()
    isAddingTask = false;

    constructor(private taskService: TasksService){
      this.userId = "";
    }

    get selectedUserTasks() {
      return this.taskService.getUserTasks(this.userId)
    }
    onStartAddTask(){
      this.isAddingTask=true;
    }
    onCloseAddTask(){
      this.isAddingTask = false;
    }
    onAddTask(task: NewTaskData){
      this.taskService.addTask(task, this.userId)
      this.isAddingTask = false;
    }
    
}
