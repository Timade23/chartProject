import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { RegionService } from '../service/region.service';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit{

  constructor(private regionService : RegionService) {}



  ngOnInit(): void {
    debugger;
    this.regionService.getRegions().subscribe(response => {
      let regionList = response;
      debugger;
      console.log('data',regionList)
      return regionList
    });

    new Chart("barchart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  }

}
