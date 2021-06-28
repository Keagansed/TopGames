import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, FilterDialog } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HomepageComponentComponent } from './framework/homepage-component/homepage-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatSnackBarModule, MatToolbarModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { ChartModule } from 'angular-highcharts';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './presentation';
import { NetworkModule } from './network/network.module';
import { MaterialModule } from 'src/app/material.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SocketIoModule.forRoot(config), BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    ChartModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MaterialModule,
    MatCardModule,
    OverlayModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    NetworkModule.forEnvironment(false),
    HttpClientModule
  ],
  entryComponents: [FilterDialog],
  declarations: [AppComponent, HomepageComponentComponent, FilterDialog],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
