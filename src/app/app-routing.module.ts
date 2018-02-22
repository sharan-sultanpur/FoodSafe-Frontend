import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {LoginComponent} from './theme/login/login.component';
import {CorporateComponent} from './theme/dashboard/corporate-dashboard/corporate.component';

const routes: Routes = [
   {  path : '',redirectTo : 'login', pathMatch : 'full'},

  { path: 'admin',component: AdminComponent,
    children: [

       // { path: '', redirectTo: 'dashboard/default',pathMatch: 'full' },

       //{ path: 'corporate',loadChildren: './corporate/corporate.module#CorporateModule' },

       { path: '', redirectTo: 'dashboard/default',pathMatch: 'full' },
       // { path: 'dashboard',loadChildren: './theme/dashboard/dashboard.module#DashboardModule' },
       {
         // path: 'rawmaterial',
         // loadChildren: './theme/rawmaterial/rawmaterial.module#RawmaterialModule'
       },
       {
         // path: 'configuration',
         // loadChildren: './theme/configuration/configuration.module#ConfigurationModule'
       }

    ]
  },

   // {path: 'login',component : LoginComponent},

   // {path : '**', redirectTo : 'login',pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  // { path:'po',component:PoComponent,},

  // { path:'sidebar',component:SidebarComponent,},

  // { path:'rawmaterial',component:RawMaterialComponent,},

  // { path:'rawmaterial/rawmaterialdetails',component:RawMaterialDetailsComponent,},

  //  { path:'rawmaterial/rawmaterialtable',component:RawMaterialTableComponent,},
  //  
  //  import {PoComponent} from './components/po/po.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { RawMaterialComponent } from './components/raw-material/raw-material.component';
// import { RawMaterialDetailsComponent } from './components/raw-material-details/raw-material-details.component';
// import { RawMaterialTableComponent } from './components/raw-material-table/raw-material-table.component';
