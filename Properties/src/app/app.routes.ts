import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseLocComponent } from './house-loc/house-loc.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'house-loc',
        component: HouseLocComponent,
        title: 'Houseing Locations'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: '**',
        component: ErrorComponent,
        title: 'Not Found'
    }
];
