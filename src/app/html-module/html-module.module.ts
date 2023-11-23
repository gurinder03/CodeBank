import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlModuleRoutingModule } from './html-module-routing.module';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { HtmlEditorsComponent } from './html-editors/html-editors.component';
import { HtmlElementsComponent } from './html-elements/html-elements.component';
import { FormsModule } from '@angular/forms';
import { HtmlAttributesComponent } from './html-attributes/html-attributes.component';
import { HtmlHeadingsComponent } from './html-headings/html-headings.component';
import { HtmlParagraphsComponent } from './html-paragraphs/html-paragraphs.component';
import { HtmlStyleComponent } from './html-style/html-style.component';
import { HtmlFormattingComponent } from './html-formatting/html-formatting.component';
import { SharedModule } from '../shared/shared.module';
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
import { HtmlStyleGuideComponent } from './html-style-guide/html-style-guide.component';
import { HtmlEntitiesComponent } from './html-entities/html-entities.component';
import { HtmlSymbolsComponent } from './html-symbols/html-symbols.component';
import { HtmlCharsetComponent } from './html-charset/html-charset.component';
import { HtmlUrlEncodeComponent } from './html-url-encode/html-url-encode.component';
import { HtmlXhtmlComponent } from './html-xhtml/html-xhtml.component';
import { HtmlFormsComponent } from './html-forms/html-forms.component';
import { HtmlFormsAttributeComponent } from './html-forms-attribute/html-forms-attribute.component';


@NgModule({
  declarations: [
    HtmlComponent,
    HtmlIntroComponent,
    HtmlEditorsComponent,
    HtmlElementsComponent,
    HtmlAttributesComponent,
    HtmlHeadingsComponent,
    HtmlParagraphsComponent,
    HtmlStyleComponent,
    HtmlFormattingComponent,
    HtmlMetaTagsComponent,
    HtmlQuotationsComponent,
    HtmlCommentsComponent,
    HtmlColorsComponent,
    HtmlLinksComponent,
    HtmlImagesComponent,
    HtmlFaviconComponent,
    HtmlPageTitleComponent,
    HtmlTablesComponent,
    HtmlListsComponent,
    HtmlBlockInlineComponent,
    HtmlDivComponent,
    HtmlClassesComponent,
    HtmlIdComponent,
    HtmlIframeComponent,
    HtmlJavascriptComponent,
    HtmlFilePathsComponent,
    HtmlHeadComponent,
    HtmlLayoutComponent,
    HtmlResponsiveComponent,
    HtmlComputercodeComponent,
    HtmlSemanticsComponent,
    HtmlStyleGuideComponent,
    HtmlEntitiesComponent,
    HtmlSymbolsComponent,
    HtmlCharsetComponent,
    HtmlUrlEncodeComponent,
    HtmlXhtmlComponent,
    HtmlFormsComponent,
    HtmlFormsAttributeComponent,
  ],
  imports: [
    CommonModule,
    HtmlModuleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HtmlModuleModule { }
