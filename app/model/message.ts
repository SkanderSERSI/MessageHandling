export class Message {
    id:number;
    publication_date: String;
    object:String;
    priority:String;
    content:String;
    
    constructor(){
        var date=  new Date();
        this.publication_date =  date.toString();
    }
}
