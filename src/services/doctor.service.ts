import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Doctor } from 'src/model/doctor';
import { Patient } from 'src/model/patient';
import { Visit } from 'src/model/Visit';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  doctorTab :Doctor[] = GLOBAL._DB.doctors;
  patientTab :Patient[] = GLOBAL._DB.patients;
  visitTab :Visit[] = GLOBAL._DB.visits;
  
  getVisitByRelation(doctor_id:BigInt,patient_id:BigInt):Promise<Visit>{

    // First, filter the visits by patient ID
    const patientVisits = this.visitTab.filter(v => v.patient_id === patient_id);

    // Next, find the visits where the doctor ID matches the one you're interested in
    const doctorVisits = patientVisits.filter(v => v.doctor_id === doctor_id);
   
    return new Promise(resolve => resolve(doctorVisits[0]??null))
  }

  getVisitByDoctor(doctor_id:BigInt):Promise<Visit>{
    
    const doctorVisit = this.visitTab.filter(v => v.doctor_id === doctor_id);
    return new Promise(resolve => resolve(doctorVisit[0]??null))
  }

  

  getPatientsByDoctorId(doctor_id:BigInt):Promise<Patient[]>{
    
    return new Promise(resolve => resolve(this.tab))
  }

}
