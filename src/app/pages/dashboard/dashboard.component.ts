import { Component, OnInit } from '@angular/core';
import { UserDataBean } from 'src/app/core/models/user-databean';


const UserData: UserDataBean[] = [
  {firstName : 'Vismay', lastName: 'Patel', city: 'Godhara',
    country: 'INdia', designation: 'Manager', emailId: ''
  , languageKnown: '', mobileNo: '1234', state: 'Gujarat',
   userExperience: [{companyName: 'Xomic Infotech', jonDescription: 'JR Java Developer', noOfYears: 3}] },
   {firstName : 'Raj', lastName: 'Patel', city: 'Ahemdabad',
    country: 'INdia', designation: 'Manager', emailId: ''
  , languageKnown: '', mobileNo: '1234', state: 'Gujarat',
   userExperience: [{companyName: 'Xomic Infotech', jonDescription: 'JR Java Developer', noOfYears: 5}] },
   {firstName : 'Preha', lastName: 'Thakkar', city: 'ahemdabad',
    country: 'INdia', designation: 'Dy Manager', emailId: ''
  , languageKnown: '', mobileNo: '1234', state: 'Gujarat',
   userExperience: [{companyName: 'Xomic Infotech', jonDescription: 'SR Tester', noOfYears: 10}] },
   {firstName : 'Deepa', lastName: 'Lahora', city: 'kutch',
    country: 'INdia', designation: 'Manager', emailId: ''
  , languageKnown: '', mobileNo: '1234', state: 'Gujarat',
   userExperience: [{companyName: 'Xomic Infotech', jonDescription: 'SR Tester', noOfYears: 10}] }
];

@Component({
  selector: 'xomic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource = UserData;
  displayedColumns: string[] = ['firstName', 'lastName', 'city', 'country', 'designation'];
  constructor() { }

  ngOnInit(): void {
  }

}
