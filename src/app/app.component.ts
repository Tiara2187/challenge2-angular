import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  allowNewServer = true;

  //add click serverCreationStatus
  serverCreationStatus = 'No Server has been Created';

  //definisikan 
  serverName = '';

  constructor(){
    
  }

  ngOnInit(): void{
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);

  }

  changeStatus(): any{
    this.serverCreationStatus = 'Server has been Created';

  }

  onCreateServer(): any{
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  



  //ini kalau pake passing
  // onUpdateServerName(event: any): void{
  //   console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
    
  // }


  // increaseNumber(): any{
  //   this.number++;
  // }
}
