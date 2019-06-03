import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class EventsService {
    constructor(private http: HttpClient) { }

    getAllEvents(): Observable<Array<Event>> {
        return this.http.get<Array<Event>>(environment.urlEvent);
    }

    getEventById(id: number): Observable<Event> {
        return this.http.get<Event>(`${environment.urlEvent}/${id}`);
    }
}
