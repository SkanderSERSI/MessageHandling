import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { retry,catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url="https://3a519tokjd.execute-api.us-west-2.amazonaws.com/dev/message";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  errorHandler(error: HttpErrorResponse){
    return throwError("Server Error: Please Try Again Later")
  }

  getAllMessages(){
    return this.http.get(this.url).pipe(map((messages: Array<Message>)=>{
      let userMap:Message[] = [];
      messages && messages.forEach((message)=>{
        userMap.push({
          id: message['id'],
          object: message['message_object'],
          content: message['message_message'],
          priority: message['message_priority'],
          publication_date: message['message_date']
        });
      });
      return userMap;
    }));
  }

  getMessageById(id:number){
    return this.http.get<Message>(this.url+'/'+id).pipe(retry(0),
    catchError(this.errorHandler));
  }

  createMessage(message){
    console.log(message);
    return this.http.post<Message>(this.url,message, this.httpOptions).pipe(retry(0),
    catchError(this.errorHandler));
  }

  deleteMessage(id){
    return this.http.delete(this.url+"?id="+Number(id)).pipe(retry(0),catchError(this.errorHandler));
  }
}
