import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019, 3, 14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 6, 9)),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2019, 1, 12)),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2019, 0, 18)),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}