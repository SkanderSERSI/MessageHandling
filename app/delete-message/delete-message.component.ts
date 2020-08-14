import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  messageId;
  message;
  errorMessage:String;

  constructor(private messageService:MessageService, private route:ActivatedRoute, private router:Router) {
      }

  ngOnInit() {
    this.messageId = this.route.snapshot.params["indexTask"];
    this.messageService.getMessageById(this.messageId).subscribe(data =>{
      this.message = data,error => this.errorMessage = error;
    });
  
  }

  deleteMessage(){
    this.messageService.deleteMessage(this.messageId).subscribe(data => {
      this.message= data;
      this.router.navigate(["/list"])  ;
    },
    error => this.errorMessage = error);
    
  }

}
