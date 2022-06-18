import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  notes: Note[] = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notes = this.noteService.getNotes();
  }

  saveNote(note: Note){
    //this.notes.push(note);
    this.noteService.storeNote(note);
  }
  
  deleteAll(confirm: boolean){
    if(confirm){
      this.noteService.removeAll();
      this.getNotes();
    }
  }

}
