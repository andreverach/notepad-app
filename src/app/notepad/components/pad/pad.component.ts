import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent {

  formGroup!: FormGroup;
  @Output() sendNote = new EventEmitter<Note>();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
   }  

  saveNote(){
    if(this.formGroup.valid){
      console.log('se envio la información desde el componente pad');
      this.sendNote.emit(this.formGroup.value);
      this.clearForm();
    }else{
      this.formGroup.markAllAsTouched();
    }
  }

  clearForm(){
    this.formGroup.patchValue({
      content: '',
      icon: 'note',
      date: new Date
    });
    this.formGroup.markAsUntouched();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      content: ['', Validators.required],
      icon: ['note'],
      date: [new Date]
    });
  }

  get contentField(){
    return this.formGroup.get('content');
  }

  /* get isContentFieldInvalid(){
    return this.contentField?.touched && this.contentField?.invalid;
  } */

}
