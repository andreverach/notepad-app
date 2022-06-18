import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {

  note!: Note;
  @Output() _remove = new EventEmitter<number>();
  @Input() _note!: Note;
  @Input() _index!: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {    
    if(!this._note){
      this.router.navigate(['board']);
    }
    this.note = this._note;
  }

  back(){
    this.router.navigate(['board']);
  }

  remove(){
    this._remove.emit(this._index);
  }
}
