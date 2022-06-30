import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  comment!: string;
  comments = [
    `What has happened to the church in 2000 years?!`,
    `“God is faithful, by whom you were called to the fellowship of His Son, Jesus Christ our Lord.”`,
    `“..endeavoring to keep the unity of the Spirit in the bond of peace.”`
  ];
  
  constructor() {
    // Select a random note from the notes array above.
    this.comment = this.comments[Math.ceil(Math.random() * this.comments.length) - 1];
  }
}
