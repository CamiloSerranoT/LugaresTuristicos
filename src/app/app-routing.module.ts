import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LugaresturisticosComponent } from './components/lugaresturisticos/lugaresturisticos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'Home'},
  {path:'home', component: HomeComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'lugaresturisticos', component: LugaresturisticosComponent},
  {path:'menu-principal', component: MenuPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
