import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos nuestros componentes
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

//creamos la constante para las Rutas
const routes: Routes = [
  { path: '', component: ShowComponent },
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
