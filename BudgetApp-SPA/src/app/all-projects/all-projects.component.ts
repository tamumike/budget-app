import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  @Output() title: string = 'All Projects';
  summaries: any;
  @Output() KPIs: any = [];

  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getData();
    this.route.data.subscribe(data => {
      this.KPIs = data['data'];
    }, error => {
      console.log('all-projects ngOnInit');
    });
  }

  getData(): any {
    this.dataService.getProjectSummaries().subscribe(response => {
      this.summaries = response;
    }, error => {
      console.log('overview - getData');
    });
  }

  navToProject(afe_id: string): void {
    this.router.navigate(['overview/' + afe_id]);
  }

  isBudgetExceeded(data: any) {
    return data.total_Budget < data.actuals;
  }
}
