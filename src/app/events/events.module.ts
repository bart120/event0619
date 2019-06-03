import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { EventsIndexPage } from './events-index/events-index.page';

const routes: Routes = [
  {
    path: '',
    component: EventsIndexPage
  }
];

@NgModule({
  declarations: [EventsIndexPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsModule {

}
