import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  /**
   * To change something in child component accessed we implement AfterViewInit interface
   * @Override method ngAfterViewInIt()
   */
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
  }



}
