import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../controller/services/navigation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from '../controller/auth/auth.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  formDetail!: FormGroup;
  
  public link: string = 'https://facebook.com/@garfunkel61/angular-simplest-solution-for-social-sharing-feature-6f00d5d99c5e'
  public twitter: string = "Hi my name is techengineer"
  public gmailSubject: string = "Test Email By Tech Eng"
  public gmailBody: string = "Hi How are you bro"
  public linkedInText: string = "Share by linked In"
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '10rem',
    maxHeight: '10rem',
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
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(
    public navCtrl: NavigationService,
    public fb: FormBuilder,
    public auth: AuthService
  ){

  }
  addNewQuestion(){ 
    if(this.auth.isAuthenticated()){
      this.navCtrl.goTo('/forum')
    } else{
      this.navCtrl.goTo('/login')
    }
  }

  ngOnInit(): void {
      this.formData()
  }

  formData(){
    this.formDetail = this.fb.group({
      postAnswer: ['', [Validators.required]],
    });
  }


  onSubmit() {
    debugger;
    this.formDetail.markAllAsTouched()
    console.log('F => ', this.formDetail);
  }

  addComment(){
    if(this.auth.isAuthenticated()){
      this.navCtrl.goTo('/add-comment')
    }
    else{
      this.navCtrl.goTo('/login')
    }
  }
}
