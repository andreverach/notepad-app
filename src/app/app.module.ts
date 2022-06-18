import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//to use formgroups etc
//import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { BoardComponent } from './notepad/containers/board/board.component';
import { PadComponent } from './notepad/components/pad/pad.component';
import { ListComponent } from './notepad/components/list/list.component';
import { NoteViewComponent } from './notepad/components/note-view/note-view.component';
import { NoteDetailComponent } from './notepad/containers/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PadComponent,
    ListComponent,
    NoteViewComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    //CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
