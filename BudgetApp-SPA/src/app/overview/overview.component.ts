import { Component, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Output() title: string = 'Overview';

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

}
