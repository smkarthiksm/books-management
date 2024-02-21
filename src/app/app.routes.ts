import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksListingComponent } from './books-listing/books-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { provideState } from '@ngrx/store';
import { booksFeature } from './state/reducers/books.reducer';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './state/effects/books.effects';
import { ApiService } from './services/api.service';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'books',
    component: BooksListingComponent,
    providers: [provideState(booksFeature), provideEffects(BooksEffects)],
  },
];
