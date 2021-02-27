import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [{path:'desktop',component:DesktopComponent},
{path:'mobile',component:MobileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
