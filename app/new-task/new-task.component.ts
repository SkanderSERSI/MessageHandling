import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  task=new Task();
  errorMessage:String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(f: NgForm){
    console.log(JSON.stringify(this.task));
    
  }
  
}


