import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { RegionService } from '../service/region.service';
import { RegionModel } from '../service/Models/regionsModel';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit{

  data: any;

  constructor(private regionService : RegionService) {}



  ngOnInit(): void {
    this.regionService.getRegions().subscribe(response => {
      let regionList = response;

      this.data = response.$values;

      this.populateChartData(this.data);
      console.log('data',regionList)
      return regionList
    });
  }

  populateChartData(data: RegionModel[]) {
    
    let labelsData: string [] = [];
    let labelsPopulation: number [] = [];
    
    data.forEach((element: any) => {
      labelsData.push(element.code);
      labelsPopulation.push(element.population)
    });


    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: labelsData,
        datasets: [{
          label: '# of Votes',
          data: labelsPopulation,
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
