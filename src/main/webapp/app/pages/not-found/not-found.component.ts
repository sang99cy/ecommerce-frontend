import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  title = 'Not Found';

  ngOnInit(): void {
    this.title = 'Not Found';
  }

}
