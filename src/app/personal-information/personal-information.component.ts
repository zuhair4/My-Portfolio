import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Zuhair Abbas'],
    ['DOB', '04/05/2002'],
    ['Work Exp', '1 year'],
    ['Education', 'B.Tech CSE (2018-2022)'],
    ['Interests', 'Full-Stack Development'],
  ];

  aboutMe: string[] = [
    '> Hi, I am a Software Engineer with experience in full-Stack development.',
    '> Currently, Working as SDE-1 (Program Analyst) in WNS Global Services .',
    '> Worked as Head of Placement Cell of Jamia Hamdard Univeristy (New Delhi).',
    '> We had more then 100+ companies visit the campus for various roles in exciting technologies like Ai-ML, Full-Stack, Cloud and etc.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
