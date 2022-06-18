import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './notepad/containers/board/board.component';
import { NoteDetailComponent } from './notepad/containers/note-detail/note-detail.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },   */
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'note/:id',
    component: NoteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
