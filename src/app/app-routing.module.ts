import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './content/albums/albums.component';
import { DeveloperComponent } from './content/developer/developer.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { UsersComponent } from './content/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'creator', component: DeveloperComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
