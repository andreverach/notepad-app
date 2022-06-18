import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() notes!: Note[];  

  @Output() deleteNotes = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    console.log('se inicio list component');
  }

  deleteAll(){
    console.log('se envia señal para borrar notas');
    this.deleteNotes.emit(true);
  }

}
