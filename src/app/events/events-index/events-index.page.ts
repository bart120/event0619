import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.page.html',
  styleUrls: ['./events-index.page.scss'],
})
export class EventsIndexPage implements OnInit {

  listEvents: Array<Event>;

  constructor(private router: Router, private serv: EventsService) { }

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

  }
}
