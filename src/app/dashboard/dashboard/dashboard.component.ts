import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData = {
    labels: ['Salgados', 'Marmitas', 'Bebidas', 'Gelados', 'Outras'],
    datasets: [
      {
        data: [2 , 1, 2, 1, 1],
        backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#3B3DFC']
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
