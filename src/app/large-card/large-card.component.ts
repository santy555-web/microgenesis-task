import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {
 // slides = Array.from({ length: 15 }).map((_, index) => `Slide ${index + 1}`);
  cardData = [
    {
      id: 1,
      date: 'August, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 2,
      date: 'Sept, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 3,
      date: 'Oct, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 4,
      date: 'Nov, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 5,
      date: 'Dec, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 6,
      date: '2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 7,
      date: 'Jan, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 8,
      date: 'Feb, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 9,
      date: 'March, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 10,
      date: 'April, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 11,
      date: '2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 12,
      date: 'Jan, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 13,
      date: 'Feb, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 14,
      date: 'March, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
    {
      id: 15,
      date: 'April, 2021',
      period:"Eveolution period 1st-15th september, 2021",
      status:"completed",
      logo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      completed:"690/700",
      overdue:"10",
      Requested:"5"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
