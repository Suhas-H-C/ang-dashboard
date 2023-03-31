import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      Hi,
      Welcome user.
      Hope you had a wonderful day!
    </h3>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
