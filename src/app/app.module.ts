import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuicknotesComponent } from './quicknotes/quicknotes.component';

@NgModule({
declarations: [
AppComponent,
QuicknotesComponent

],
imports: [
BrowserModule,
MatButtonModule,
MatCheckboxModule,
MatFormFieldModule,
MatCardModule,
MatInputModule,
FormsModule

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }