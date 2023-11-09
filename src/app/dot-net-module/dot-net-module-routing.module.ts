import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotNetTutorialComponent } from './dot-net-tutorial/dot-net-tutorial.component';
import { DotNetIntroComponent } from './dot-net-intro/dot-net-intro.component';
import { DotNetCorePrerequisitesComponent } from './dot-net-core-prerequisites/dot-net-core-prerequisites.component';
import { DotNetNumericsComponent } from './dot-net-numerics/dot-net-numerics.component';
import { DotNetCoreGarbageCollectionComponent } from './dot-net-core-garbage-collection/dot-net-core-garbage-collection.component';
import { DotnetCodeExecutionComponent } from './dotnet-code-execution/dotnet-code-execution.component';
import { DotNetCoreModularityComponent } from './dot-net-core-modularity/dot-net-core-modularity.component';
import { DotNetCoreProjectFilesComponent } from './dot-net-core-project-files/dot-net-core-project-files.component';
import { DotNetCorePackageReferencesComponent } from './dot-net-core-package-references/dot-net-core-package-references.component';
import { DotNetCoreMsbuildComponent } from './dot-net-core-msbuild/dot-net-core-msbuild.component';
import { DotNetCoreMetapackageComponent } from './dot-net-core-metapackage/dot-net-core-metapackage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dotnet/dot-net-tutorial',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/dot-net-tutorial',
        pathMatch: 'full',
      },
      {
        path: 'dot-net-tutorial',
        component: DotNetTutorialComponent,
      },
      {
        path: 'dot-net-intro',
        component: DotNetIntroComponent
      },
      {
        path: 'dot-net-core-prerequisites',
        component: DotNetCorePrerequisitesComponent
      },
      {
        path: 'dot-net-numerics',
        component: DotNetNumericsComponent
      },
      {
        path: 'dot-net-core-garbage-collection',
        component: DotNetCoreGarbageCollectionComponent
      },
      {
        path: 'dotnet-code-execution',
        component: DotnetCodeExecutionComponent
      },
      {
        path: 'dot-net-core-modularity',
        component: DotNetCoreModularityComponent
      },
      {
        path: 'dot-net-core-project-files',
        component: DotNetCoreProjectFilesComponent
      },
      {
        path: 'dot-net-core-package-references',
        component: DotNetCorePackageReferencesComponent
      },
      {
        path: 'dot-net-core-msbuild',
        component: DotNetCoreMsbuildComponent
      },
      {
        path: 'dot-net-core-metapackage',
        component: DotNetCoreMetapackageComponent 
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotNetModuleRoutingModule { }
