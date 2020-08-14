import { Component, OnInit, Renderer } from '@angular/core';
import {Router} from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  
  public messages;

  constructor(private messagesService:MessageService, renderer:Renderer, private router:Router) { }
/*
  loadMessages(){
    this.messagesService.getAllMessages.subscribe(
      data => { this.messages = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }*/
  ngOnInit() {
    this.messagesService.getAllMessages().subscribe(
      data => { this.messages = data },
      err => console.error(err),
      () => console.log("messages charges")
    );
  }

  deleteMessage(id){
    console.log(id);
    this.messagesService.deleteMessage(id).subscribe(data =>{

    },err => console.error(err));
    
  }
    
  
}