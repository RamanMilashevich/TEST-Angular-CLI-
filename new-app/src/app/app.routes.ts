import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';

export const routes: Routes = [
  {
    path: '', component: Homepage
  },
  { path: 'example', loadChildren: () =>
      import('./modules/example/example-module').then(m => m.ExampleModule)
  }
];
