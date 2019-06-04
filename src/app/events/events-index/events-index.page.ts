import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Calendar } from '@ionic-native/calendar/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {

  listEvents: Array<Event>;

  constructor(
    private router: Router,
    private serv: EventsService,
    private calendar: Calendar,
    private toastController: ToastController) { }

  ngOnInit() {
    /*this.listEvents = [
      { title: 'test', eventDate: new Date(2019, 5, 14) },
      { title: 'test2', eventDate: new Date(2019, 5, 16) },
      { title: 'test3', eventDate: new Date(2019, 5, 24) }
    ];*/
    this.serv.getAllEvents().subscribe(
      data => this.listEvents = data
    );
  }

  detailEvent(id: number): void {
    this.router.navigate([`/events/detail/${id}`]);
  }
  addCalendar(ev: Event): void {
    this.calendar.createEvent(ev.title, '', '', new Date(ev.publishDate), new Date(ev.publishDate))
      .then(
        async data => {
          const toast = await this.toastController.create({
            message: `Evénement ${ev.title} créé: ${data}`,
            duration: 2000
          });
          toast.present();
          this.calendar.openCalendar(new Date(ev.publishDate));
        }
      ).catch(
        async err => {
          const toast = await this.toastController.create({
            message: `${err}`,
            duration: 2000
          });
          toast.present();
        }
      );
  }
}
