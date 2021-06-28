import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponentComponent } from './framework/homepage-component/homepage-component.component';


const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '**',
        component: HomepageComponentComponent
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
