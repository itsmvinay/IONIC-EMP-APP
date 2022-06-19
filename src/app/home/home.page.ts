import { Component } from '@angular/core';
import { emp } from '../emp-data.modal';
import { EmpDataService } from '../emp-data.service';
import { TranslateService } from '@ngx-translate/core';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  language: string = this.translateService.currentLang;
  employees: emp[];
  constructor(
    private empdataservice: EmpDataService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.employees = this.empdataservice.getAllEmp();
  }
  ionViewDidEnter() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Developers', 3],
      ['Testers', 1],
      ['Project managers', 1],
      ['Team Leaders', 1],
      ['Techincal lead', 2],
    ]);

    var options = {
      title: 'Test Employees of 2021',
      width: 400,
      height: 300,
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('chart_div')
    );
    chart.draw(data, options);
  }

  languageChange() {
    this.translateService.use(this.language);
  }
}
