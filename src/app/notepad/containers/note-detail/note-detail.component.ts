import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit, OnDestroy {

  note!: Note;
  index!: number;
  paramSubscription$!: Subscription;

  constructor(
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramSubscription$ = this.activatedRoute.params
    .subscribe((params: Params) => {
      this.index = params.id;
      this.note = this.noteService.getNote(params.id - 1);
      console.log(this.note);
    });    
  }

  ngOnDestroy(): void {
    this.paramSubscription$.unsubscribe();
  }

  remove(_index: number){
    this.noteService.removeNote(_index - 1);
    this.router.navigate(['board']);
  }

}
