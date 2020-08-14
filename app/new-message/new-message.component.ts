import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  message = new Message();
  errorMessage:String;

  constructor(private messageService: MessageService,private router: Router) { }

  ngOnInit() {
    
  }

  submitForm(f: NgForm){
    console.log(JSON.stringify(this.message));
    this.messageService.createMessage(JSON.stringify(this.message)).subscribe(data =>
      {
        this.router.navigate(["/list"]);
      },error => this.errorMessage = error);
  }

}