import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testb',
  templateUrl: './testb.component.html',
  styleUrls: ['./testb.component.css']
})
export class TestbComponent implements OnInit {
  server = true;
  serverID = 10;
  serverStatus = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus(): any{
    return this.serverStatus;
  }

}
