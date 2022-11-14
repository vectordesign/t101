import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiEventListItem } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private baseUrl = environment.baseurl;

  constructor(private http: HttpClient) {}

  GetEvents(skip: number = 0, take: number = 10): Observable<any> {
    let url = this.baseUrl + 'EventList';
    url += '?pastEvents=false';
    url += '&skip=' + skip;
    url += '&take=' + take;

    return this.http.get<any>(url);
  }

  GetEventByID(id: string): Observable<ApiEventListItem> {
    let url = this.baseUrl + 'EventList?id=' + id;
    return this.http.get<any>(url);
  }
}
