import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { VisitCreateComponent } from './visit-create/visit-create.component';
import { VisitDescriptionComponent } from './visit-description/visit-description.component';
import { VisitListComponent } from './visit-list/visit-list.component';

const routes: Routes = [
  {
    path: 'visit',
    pathMatch: 'full',
    component: VisitListComponent,
  }, {
    path: 'createVisit',
    pathMatch: 'full',
    component: VisitCreateComponent,
  },{
    path:'visit/:id/edit',
    pathMatch:'full',
    component:VisitCreateComponent,
  },{
    path:'visit/:id/description',
    pathMatch:'full',
    component:VisitDescriptionComponent,
  } ,{
    path: 'patient',
    pathMatch: 'full',
    component:PatientsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
