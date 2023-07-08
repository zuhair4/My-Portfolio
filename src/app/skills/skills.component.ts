import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Javascript',
      level: 'Intermidiate',
      rating: 85,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'Firebase/MongoDb',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
