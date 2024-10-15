import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'usingApi',
        loadComponent: () => import('./features/usingApi/usingApi.component')
    },
    {
        path:'**',
        redirectTo:'usingApi'
    }
];
