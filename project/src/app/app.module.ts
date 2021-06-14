
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatPaginatorIntl } from '@angular/material/paginator';
import { myPaginator } from './my-paginator'
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {ReportComponent } from './components/report/report.component';
import { HeroService } from './hero.service';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroTopComponent,
    HeroDetailComponent,
    HeroAddComponent,
    HeroSearchComponent,
    ReportComponent,
  ],
  imports: [
    MatExpansionModule,
    HttpClientJsonpModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MDBBootstrapModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroAddComponent,
    AppComponent,
    HeroListComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    HeroService,
    { provide: MatPaginatorIntl, useValue: myPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
