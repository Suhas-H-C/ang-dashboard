import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AlbumsComponent } from './albums/albums.component';
import { ContentServiceService } from './content-service/content-service.service';
import { NavigateComponent } from './navigate/navigate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavigateComponent,
    AlbumsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgGridModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    HttpClientModule,
    MatTreeModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    NavigateComponent,
    AlbumsComponent,
    UsersComponent
  ],
  providers: [
    ContentServiceService
  ]
})
export class ContentModule { }
