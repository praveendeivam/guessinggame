import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { CompactComponent } from './compact/compact.component';

const routes: Routes = [{path:'desktop',component:DesktopComponent},
{path:'mobile',component:MobileComponent},{path:'compact',component:CompactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
