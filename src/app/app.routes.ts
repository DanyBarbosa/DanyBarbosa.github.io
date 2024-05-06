import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutomovilComponent } from './automovil/automovil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"autos", component:AutomovilComponent},
    {path: "contacto" , component: ContactoComponent},
    {path: "registro/:id", component: RegistroComponent},
    {path: "**", pathMatch:"full" ,redirectTo:"home"},
];
