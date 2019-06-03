import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { EventsIndexPage } from './events-index/events-index.page';
import { EventsDetailPage } from './events-detail/events-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EventsIndexPage
  },
  {
    path: 'detail/:id',
    component: EventsDetailPage
  }
];

@NgModule({
  declarations: [EventsIndexPage, EventsDetailPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsModule {

}
