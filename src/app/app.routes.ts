import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'animeApi',
        loadComponent: () => import('./features/AnimeApi/AnimeApi.component')
    },
    {
        path:'usingApi',
        loadComponent: () => import('./features/usingApi/usingApi.component')
    },
    {
        path:'**',
        redirectTo:'usingApi'
    }
];
