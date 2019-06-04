import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event.model';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.page.html',
  styleUrls: ['./events-detail.page.scss'],
})
export class EventsDetailPage implements OnInit {

  event: Event;

  constructor(
    private route: ActivatedRoute,
    private servEvent: EventsService,
    private nav: NavController,
    private toastController: ToastController) { }

  ngOnInit() {
    this.servEvent.getEventById(this.route.snapshot.params['id']).subscribe(
      data => this.event = data,
      async err => {
        this.nav.back();
        const toast = await this.toastController.create({
          message: 'Existe pas.',
          duration: 2000
        });
        toast.present();
      }
    );

  }

}
