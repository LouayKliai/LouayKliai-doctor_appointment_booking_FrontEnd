import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './modules/doctor/navbar/navbar.component';


export const routes: Routes = [
    {path:'',component:HomeComponent}, 
    {path:'/navbar',component:NavbarComponent},
    {path:'/doctor',loadChildren:()=> import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)}, 
    {path:'auth',loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)}
];
