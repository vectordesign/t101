import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListingComponent } from 'src/app/components/listing/listing.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { EventsService } from 'src/app/services/events.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EventsComponent, ListingComponent, CardComponent],
  imports: [CommonModule, EventsRoutingModule, HttpClientModule],
  providers: [EventsService],
})
export class EventsModule {}
