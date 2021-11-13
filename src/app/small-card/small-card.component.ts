import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-small-card',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {
  //slides = Array.from({ length: 15 }).map((_, index) => `Slide ${index + 1}`);
 // @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
 smallCard =[
  {
    id: 1,
    name: 'Lorem ipsum',
    position:"Product Manager",
    date:"overdue of April, 2021",
    requested:"requested today 1 PM",
  },
  {
    id: 2,
    name: 'Jogn Doe',
    position:"Software Developer",
    date:"overdue of April, 2021",
    requested:"requested today 11 PM",
  },
  {
    id: 3,
    name: 'sneha ipsum',
    position:"Sales Manager",
    date:"overdue of April, 2021",
    requested:"requested today 2 PM",
  },
  {
    id: 4,
    name: 'doe Doe',
    position:"Software Developer",
    date:"overdue of April, 2021",
    requested:"requested today 11 PM",
  },
  {
    id: 3,
    name: 'lorem ipsum',
    position:"Sales Manager",
    date:"overdue of April, 2021",
    requested:"requested today 2 PM",
  },
  {
    id: 2,
    name: 'santosh Doe',
    position:"Software Developer",
    date:"overdue of April, 2021",
    requested:"requested today 11 PM",
  },
  {
    id: 3,
    name: 'test ipsum',
    position:"Sales Manager",
    date:"overdue of April, 2021",
    requested:"requested today 2 PM",
  },
 ];
  constructor() {}

  ngOnInit(): void {}

}
