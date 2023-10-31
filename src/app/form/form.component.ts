import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form!: FormGroup;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  constructor(public fb: FormBuilder) {
    this.formData();
  }

  onSubmit() {
    debugger;
    this.form.markAllAsTouched();
    console.log('F => ', this.form);
  }

  formData() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      details: ['', [Validators.required]],
      discribe: ['', [Validators.required, Validators.minLength(46)]],
      addTags: ['', [Validators.required]],
    });
  }

  shareNetWork() {
    console.log('Share Data');
  }

  public onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }

  public onAdd(item:any) {
    console.log('tag added: value is ' + item);
}
}
