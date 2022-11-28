import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('overview_nav') overview_nav: ElementRef;
  @ViewChild('reports_nav') reports_nav: ElementRef;
  @ViewChild('all_projects_nav') all_projects_nav: ElementRef;
  userInfo: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  setActive(event: any) : void {
    this.clearActiveNavs();
    const el = event.srcElement;
    event.target.classList.add('active');
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe(response => {
      this.userInfo = response;
    });
  }

  clearActiveNavs() : void {
    const elements = [this.overview_nav, this.reports_nav, this.all_projects_nav];
    elements.forEach(el => {
      el.nativeElement.classList.remove('active');
    })
  }

}
