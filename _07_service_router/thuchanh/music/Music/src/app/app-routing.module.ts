import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {YoutobePlaylistComponent} from "./youtobe-playlist/youtobe-playlist.component";

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutobePlaylistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
