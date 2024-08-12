import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  taskService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId)
    this.close.emit()
  }

}
