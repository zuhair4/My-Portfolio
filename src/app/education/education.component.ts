import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Jamia Hamdard University',
      course: 'B.Tech in Computer Science',
      duration: '2018-2022',
      score: '8.09 CGPA',
    },

    {
      institute: 'Kothari International School',
      course: 'HSC',
      duration: '2018',
      score: '7.40 CGPA',
    },
    {
      institute: 'Kothari International School',
      course: 'SSC',
      duration: '2016',
      score: '9.0 CGPA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
