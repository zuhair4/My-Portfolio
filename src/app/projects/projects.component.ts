import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Restaurant Reservation System',
      technologies: 'HTML/CSS, bootstrap, Javascript, Firebase, Socket.io, node.js ',
      description: [
        'Created an online table booking system that allowed customers to reserve tables easily and efficiently.',
        'Developed a customized reporting system that allowed the restaurant to track each table booking in Real-Time, ',
        'Providing insights into occupancy rates, and revenue generation, which increases the efficiency by 50%.',
      ],
    },
    {
      title: 'iVaccinate',
      technologies: 'React , Javascript, Mongo-DB',
      description: [
        'Designed and developed user-friendly web-portal for Vaccine booking.',
        'The user has the ability to choose preferred vaccine from all the available options',
        'Form based Booking System is used, Only one time input is required for booking Vaccine.',
      ],
    },
    // {
    //   title: 'Google Toolbar',
    //   technologies: 'HTML, CSS, JS, C#',
    //   description: [
    //     'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
    //     'Learned multiple technologies to build the product.',
    //   ],
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
