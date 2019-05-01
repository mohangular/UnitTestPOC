import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {
  totalLikes = 0;
  response: any;
  constructor() {}

  ngOnInit() {}

  public like() {
    this.totalLikes++;
  }

  public disLike() {
    this.totalLikes--;
  }
}
