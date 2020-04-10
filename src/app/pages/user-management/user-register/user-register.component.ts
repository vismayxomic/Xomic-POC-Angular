import { Component, OnInit } from '@angular/core';

interface Contries {
  id: string;
  name: string;
}

interface Designation {
  id: string;
  name: string;
}

interface States {
  id: string;
  name: string;
}



@Component({
  selector: 'xomic-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  contries: Contries[] = [
    { id: '1', name: 'India' },
    { id: '2', name: 'Usa' },
    { id: '3', name: 'Canada' }
  ];

  states: States[] = [
    { id: '1', name: 'Gujarat' },
    { id: '2', name: 'Maharastra' },
    { id: '3', name: 'Rajastan' }
  ];

  designation: Designation[] = [
    {id: '1', name: 'Manager'},
    {id: '2', name: 'Dy, Manager'},
    {id: '3', name: 'Executive'}
  ];

   languagesKnown = [
    { id: 1, languageName: 'Hindi' },
    { id: 2, languageName: 'Gujarati' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
