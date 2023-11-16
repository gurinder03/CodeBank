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
import { HtmlIdComponent } from './html-id/html-id.component';
import { HtmlIframeComponent } from './html-iframe/html-iframe.component';
import { HtmlJavascriptComponent } from './html-javascript/html-javascript.component';
import { HtmlFilePathsComponent } from './html-file-paths/html-file-paths.component';
import { HtmlHeadComponent } from './html-head/html-head.component';
import { HtmlLayoutComponent } from './html-layout/html-layout.component';
import { HtmlResponsiveComponent } from './html-responsive/html-responsive.component';
import { HtmlComputercodeComponent } from './html-computercode/html-computercode.component';
import { HtmlSemanticsComponent } from './html-semantics/html-semantics.component';



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
      },
      {
        path: 'html-id',
        component:HtmlIdComponent
      },
      {
        path: 'html-iframe',
        component:HtmlIframeComponent
      },
      {
        path: 'html-javascript',
        component:HtmlJavascriptComponent
      },
      {
        path: 'html-file-paths',
        component:HtmlFilePathsComponent
      },
      {
        path: 'html-head',
        component:HtmlHeadComponent
      },
      {
        path: 'html-layout',
        component:HtmlLayoutComponent
      },
      {
        path: 'html-responsive',
        component:HtmlResponsiveComponent
      },
      {
        path: 'html-computercode',
        component:HtmlComputercodeComponent
      },
      {
        path: 'html-semantics',
        component:HtmlSemanticsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
