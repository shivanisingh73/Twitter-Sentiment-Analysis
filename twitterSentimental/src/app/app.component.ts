import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data:any;

  info={
    "data": {
        "arr": [
           10,
           50
        ],
        "tweets": []
    }
}


  // Doughnut
  public doughnutChartLabels:string[] = ['positive','negative'];
  public demodoughnutChartData:number[] = this.info.data.arr ;
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}
