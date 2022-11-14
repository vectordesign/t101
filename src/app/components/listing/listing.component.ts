import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListingComponent implements OnInit {
  @Input() loading: boolean = true;
  @Input() items: any = [];

  public detailurl: string = 'https://www.recon.com/en/Events/Calendar/Event';

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.eventService.GetEvents().subscribe((response) => {
      this.items = response;
      this.loading = false;
    });
  }
}
