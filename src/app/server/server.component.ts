import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus: string = 'offline';

  // function to get server status
  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {}

  ngOnInit(): void {}
}
