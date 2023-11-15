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
import { HtmlFaviconComponent } from './html-favicon/html-favicon.component';
import { HtmlPageTitleComponent } from './html-page-title/html-page-title.component';
import { HtmlTablesComponent } from './html-tables/html-tables.component';
import { HtmlListsComponent } from './html-lists/html-lists.component';
import { HtmlBlockInlineComponent } from './html-block-inline/html-block-inline.component';
import { HtmlDivComponent } from './html-div/html-div.component';
import { HtmlClassesComponent } from './html-classes/html-classes.component';



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
      },
      {
        path: 'html-favicon',
        component:HtmlFaviconComponent
      },
      {
        path: 'html-page-title',
        component:HtmlPageTitleComponent
      },
      {
        path: 'html-tables',
        component:HtmlTablesComponent
      },
      {
        path: 'html-lists',
        component:HtmlListsComponent
      },
      {
        path: 'html-block-inline',
        component:HtmlBlockInlineComponent
      },
      {
        path: 'html-div',
        component:HtmlDivComponent
      },
      {
        path: 'html-classes',
        component:HtmlClassesComponent
      }
   
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
