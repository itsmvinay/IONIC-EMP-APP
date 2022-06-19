import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDataService } from '../../emp-data.service';
import { emp } from '../../emp-data.modal';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.page.html',
  styleUrls: ['./emp-details.page.scss'],
})
export class EmpDetailsPage implements OnInit {
  language: string = this.translateService.currentLang;
  choosenEmp: emp;
  constructor(
    private empdataservice: EmpDataService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((data) => {
      if (!data) {
        this.router.navigate(['/home']);
        return;
      }
      const empId = data.get('empId');
      this.choosenEmp = this.empdataservice.getEmpById(+empId);
    });
  }

  languageChange() {
    this.translateService.use(this.language);
  }
}
