
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import {ReportComponent} from './components/report/report.component'

const routes: Routes = [
  { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
  { path: 'home',component:HeroListComponent },
  { path: 'hero-list', component: HeroListComponent },
  { path: 'hero-top', component: HeroTopComponent},
  { path: 'hero-detail/:id', component: HeroDetailComponent},
  { path: 'hero-add', component: HeroAddComponent},
  { path: 'hero-search', component:HeroSearchComponent},
  { path: 'report',component:ReportComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule  ]
})
export class AppRoutingModule { }
