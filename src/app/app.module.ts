import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularComponent } from './angular/angular.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { ReactComponent } from './react/react.component';
import { CComponent } from './c/c.component';
import { CplusComponent } from './cplus/cplus.component';
import { NodeComponent } from './node/node.component';
import { SqlComponent } from './sql/sql.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AppRoutingModule } from './app-routing.module';
import { WeektrainingComponent } from './weektraining/weektraining.component';
import { MonthtrainingComponent } from './monthtraining/monthtraining.component';
import { EditerComponent } from './editer/editer.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './controller/auth/auth.interceptor';
import { FormComponent } from './form/form.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShareButtonComponent } from './share-button/share-button.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { TagInputModule } from 'ngx-chips';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AbooutUsComponent } from './aboout-us/aboout-us.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    AngularComponent,
    DotnetComponent,
    JavascriptComponent,
    JqueryComponent,
    ReactComponent,
    CComponent,
    CplusComponent,
    NodeComponent,
    SqlComponent,
    TypescriptComponent,
    WeektrainingComponent,
    MonthtrainingComponent,
    EditerComponent,
    FormComponent,
    ForumsListComponent,
    ForumDetailsComponent,
    ShareButtonComponent,
    LoginComponent,
    SignUpComponent,
    AddCommentComponent,
    CertificationsComponent,
    BannerComponent,
    FooterComponent,
    ContactUsComponent,
    AbooutUsComponent,
   

    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    TagInputModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MatPaginatorModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
