import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from '../.ngpathway/routes';
import { AppComponent } from './app/app.component';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
