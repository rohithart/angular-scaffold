import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/app/configs/app.config';

import { Auth0AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
	appConfig: any;
	menuItems: any[] = [];
	menuHouseItems: any[] = [];
	menuItemsDefault: any[] = [];

	constructor(@Inject(APP_CONFIG) appConfig: any, public authService: Auth0AuthService) {
	  this.appConfig = appConfig;
	}

	ngOnInit() {
	  this.loadMenus();
	}

	private loadMenus(): void {
	  this.menuItems = [
	    {
	      link: '/' + AppConfig.routes.feedback,
	      name: 'Feedback',
	      icon: 'fas fa-comment-dots'
	    },
	  ];
	  this.menuItemsDefault = [
	    {
	      link: '/' + AppConfig.routes.about,
	      name: 'About us',
	      icon: 'fas fa-user-tie'
	    },
	    {
	      link: '/' + AppConfig.routes.contact,
	      name: 'Contact us',
	      icon: 'fas fa-phone'
	    },
	    {
	      link: '/' + AppConfig.routes.faq,
	      name: 'FAQ',
	      icon: 'far fa-question-circle'
	    }
	  ];
	}
}
