import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from './../shared/dataStorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authSub!: Subscription;
  isAuthenticated!: boolean;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onStore() {
    this.dataStorageService.storeRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
