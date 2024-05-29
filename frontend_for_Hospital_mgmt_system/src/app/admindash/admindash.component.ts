import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  searchText: string="";
  patients: Patient[]=[]; 

  constructor(private patientService: PatientService, private adminAuthService:AdminauthService, private router:Router) { }

  ngOnInit(): void {

    this.getPatients();
  }

   getPatients(){
    this.patientService.getPatientList().subscribe(data => { this.patients = data; 
    });

  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
  }

  logout(){
    this.adminAuthService.logout();
    this.router.navigate(['home']);
  }




  // searchPatients() {
  //   if (this.searchText.trim() === '') {
  //     // If the search text is empty, reset to the original patient list
  //     this.getPatients();
  //   } else {
  //     // Filter patients based on the search text
  //     this.patients = this.patients.filter(patient =>
  //       patient.name.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //   }
  // }
  

}