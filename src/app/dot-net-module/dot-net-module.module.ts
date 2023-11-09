import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotNetModuleRoutingModule } from './dot-net-module-routing.module';
import { DotNetIntroComponent } from './dot-net-intro/dot-net-intro.component';
import { DotNetTutorialComponent } from './dot-net-tutorial/dot-net-tutorial.component';
import { SharedModule } from '../shared/shared.module';
import { DotNetCorePrerequisitesComponent } from './dot-net-core-prerequisites/dot-net-core-prerequisites.component';
import { DotNetNumericsComponent } from './dot-net-numerics/dot-net-numerics.component';
import { DotNetCoreGarbageCollectionComponent } from './dot-net-core-garbage-collection/dot-net-core-garbage-collection.component';
import { DotnetCodeExecutionComponent } from './dotnet-code-execution/dotnet-code-execution.component';
import { DotNetCoreModularityComponent } from './dot-net-core-modularity/dot-net-core-modularity.component';
import { DotNetCoreProjectFilesComponent } from './dot-net-core-project-files/dot-net-core-project-files.component';
import { DotNetCorePackageReferencesComponent } from './dot-net-core-package-references/dot-net-core-package-references.component';
import { DotNetCoreMsbuildComponent } from './dot-net-core-msbuild/dot-net-core-msbuild.component';
import { DotNetCoreMetapackageComponent } from './dot-net-core-metapackage/dot-net-core-metapackage.component';


@NgModule({
  declarations: [
    DotNetIntroComponent,
    DotNetTutorialComponent,
    DotNetCorePrerequisitesComponent,
    DotNetNumericsComponent,
    DotNetCoreGarbageCollectionComponent,
    DotnetCodeExecutionComponent,
    DotNetCoreModularityComponent,
    DotNetCoreProjectFilesComponent,
    DotNetCorePackageReferencesComponent,
    DotNetCoreMsbuildComponent,
    DotNetCoreMetapackageComponent
  ],
  imports: [
    CommonModule,
    DotNetModuleRoutingModule,
    SharedModule
  ]
})
export class DotNetModuleModule { }
