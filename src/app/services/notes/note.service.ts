import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
import { Note } from 'src/app/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  list : Note[] = [];
  //private notes = new BehaviorSubject<Note[]>([]);
  //notes$ = this.notes.asObservable();

  constructor() { }


  storeNote(note: Note){
    //this.list = [...this.list, note];
    this.list.push(note);
    //this.notes.next(this.list);
  }

  getNotes(): Note[]{
    return this.list;
  }

  getNote(index: number): Note{
    return this.list[index];
  }

  removeNote(index: number){
    this.list.splice(index, 1);
  }

  removeAll(){
    this.list = [];
  }

}
