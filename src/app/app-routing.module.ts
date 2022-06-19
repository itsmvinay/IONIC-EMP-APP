import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:[
      {
        path:'',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ':empId',
        loadChildren: () => import('./home/emp-details/emp-details.module').then( m => m.EmpDetailsPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
