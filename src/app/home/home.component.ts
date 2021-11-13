import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  ];
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
  ];
  isMove:boolean;
  constructor() {}

  ngOnInit(): void {}
  onLargeCardClick(direction){
    this.isMove=true;
    // let distance = listRef.current.getBoundingClientRect().x - 50;
    // if (direction === "left" && slideNumber > 0) {
    //   setSlideNumber(slideNumber - 1);
    //   listRef.current.style.transform = `translateX(${230 + distance}px)`;
    // }
    // if (direction === "right" && slideNumber < 5) {
    //   setSlideNumber(slideNumber + 1);
    //   listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    // }
  }

}
