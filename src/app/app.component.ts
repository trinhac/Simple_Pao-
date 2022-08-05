import { Component, OnInit} from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { GetArticlesService } from './services/article/get-articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'TheNews';
  constructor(private sidebarService: NbSidebarService, private router:Router, private themeService: NbThemeService) {}

  ngOnInit(): void {}

  navigateTo(url:string){
    this.router.navigate([url])
  }


  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      badge: {
        text: '3',
        status: 'primary',
      },
      children: [
        {
          title: 'Messages',
          badge: {
            status: 'danger',
          },
        },
        {
          title: 'Notifications',
          badge: {
            dotMode: true,
            status: 'warning',
          },
        },
        {
          title: 'Emails',
          badge: {
            text: 'new',
            status: 'success',
          },
        },
      ],
    },
  ];
}

