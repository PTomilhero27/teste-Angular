import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../models/skills';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  public  loading: boolean = true;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<Skills>) => {
      this.cards = ret 
      this.loading = false
    }, err => this.loading = false);
  }

}
