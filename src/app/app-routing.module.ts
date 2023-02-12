import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'visit',
    pathMatch: 'full',
    component: visitListComponent,
  }, {
    path: 'createMember',
    pathMatch: 'full',
    component: MemberFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
