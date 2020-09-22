import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { MDBModalService } from 'angular-bootstrap-md';
import { Goal } from '../goal';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date());

  constructor(private modalService: MDBModalService) {

  }


  openModal(content) {

    this.modalService._showModal(content);

  }

  ngOnInit(): void {
  }

}
