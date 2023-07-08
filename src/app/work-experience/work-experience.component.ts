import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Program Analyst',
      company: 'WNS Global Services',
      duration: 'Jul 2022 - Now',
      description: [
        'Working on Angular Projects for a logistics Client.',
        'Designed & Created various reusable components and services',
        'Worked on JavaScript, Angular, Angular Material UI, React, Redux, Node.js,',
      ],
    },
    {
      role: 'Project Engineer - Turbo',
      company: 'Wipro',
      duration: 'dec 2022 - jun 2023',
      description: [
        'Cloud - AWS Internship',
        'JAVA Spring Boot, J2EE',
        'Javascript, Angular, Node.js',
      
      ],
    },
    {
      role: 'Head Coordinator',
      company: 'Jamia Hamdard',
      duration: 'Jul 2020 - Mar 2022',
      description: [
        'Conducted hackathons with over 500 participants',
        'Successfully orchestrated campus recruitment drives',
        'Securing partnerships with 120+ prestigious companies',
      ],
    },
    // {
    //   role: 'Placement Coordinator',
    //   company: 'Google',
    //   duration: 'Apr 2004 - Jun 2008',
    //   description: [
    //     'Worked on Google Toolbar',
    //     'Involved in team to develop Google Chrome',
    //   ],
    // },
    // {
    //   role: 'Software Developer',
    //   company: 'McKinsey & Co',
    //   duration: 'Sep 2002 - Mar 2004',
    //   description: [
    //     'Worked with multiple teams to develop desktop and web applications',
    //     'Worked on different technologies such as (Dotnet, C++, Java)',
    //   ],
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
