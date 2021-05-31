import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LugaresturisticosComponent } from './components/lugaresturisticos/lugaresturisticos.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LugaresturisticosComponent,
    HomeComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    TableModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
