export interface ApiEventListItem {
  Id: number;
  V3Guid: string;
  Thumbnail: Thumbnail;
  Name: string;
  Location: string;
  StartDate: StartDate;
  EndDate: EndDate;
  DateDetail: string;
}

export interface Thumbnail {
  ImageGuid: string;
  EventId: number;
  Id: string;
  Classification: number;
  Created: Date;
  ThumbnailUrl: string;
  Url: string;
  Dimensions: number[];
  ThumbnailDimensions: number[];
}

export interface StartDate {
  Day: number;
  Month: number;
  Year: number;
}

export interface EndDate {
  Day: number;
  Month: number;
  Year: number;
}
