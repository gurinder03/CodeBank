import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { HtmlEditorsComponent } from './html-editors/html-editors.component';
import { HtmlElementsComponent } from './html-elements/html-elements.component';
import { HtmlAttributesComponent } from './html-attributes/html-attributes.component';
import { HtmlHeadingsComponent } from './html-headings/html-headings.component';
import { HtmlParagraphsComponent } from './html-paragraphs/html-paragraphs.component';
import { HtmlStyleComponent } from './html-style/html-style.component';
import { HtmlFormattingComponent } from './html-formatting/html-formatting.component';
import { HtmlMetaTagsComponent } from './html-meta-tags/html-meta-tags.component';
import { HtmlQuotationsComponent } from './html-quotations/html-quotations.component';
import { HtmlCommentsComponent } from './html-comments/html-comments.component';
import { HtmlColorsComponent } from './html-colors/html-colors.component';
import { HtmlLinksComponent } from './html-links/html-links.component';
import { HtmlImagesComponent } from './html-images/html-images.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/html/html-tutorial',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/html-tutorial',
        pathMatch: 'full',
      },
      {
        path: 'html-tutorial',
        component: HtmlComponent,
      },
      {
        path: 'html-intro',
        component: HtmlIntroComponent
      },
      {
        path: 'html-editors',
        component: HtmlEditorsComponent
      },
      {
        path: 'html-elements',
        component:HtmlElementsComponent
      },
      {
        path: 'html-attributes',
        component:HtmlAttributesComponent
      },
      {
        path: 'html-headings',
        component:HtmlHeadingsComponent
      },
      {
        path: 'html-paragraphs',
        component:HtmlParagraphsComponent
      },
      {
        path: 'html-style',
        component:HtmlStyleComponent
      },
      {
        path: 'html-formatting',
        component:HtmlFormattingComponent
      },
      {
        path: 'html-meta-tags',
        component:HtmlMetaTagsComponent
      },
      {
        path: 'html-quotations',
        component:HtmlQuotationsComponent
      },
      {
        path: 'html-comments',
        component:HtmlCommentsComponent
      },
      {
        path: 'html-colors',
        component:HtmlColorsComponent
      },
      {
        path: 'html-links',
        component:HtmlLinksComponent
      },
      {
        path: 'html-images',
        component:HtmlImagesComponent
      }
   
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
