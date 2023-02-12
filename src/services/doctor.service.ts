import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Doctor } from 'src/model/doctor';
import { Patient } from 'src/model/patient';
import { Visit } from 'src/model/visit';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  doctorTab: Doctor[] = GLOBAL._DB.doctors;
  patientTab: Patient[] = GLOBAL._DB.patients;
  visitTab: Visit[] = GLOBAL._DB.visits;

  getVisitByRelation(doctor_id: BigInt, patient_id: BigInt): Promise<Visit> {

    // First, filter the visits by patient ID
    const patientVisits = this.visitTab.filter(v => v.patient_id === patient_id);

    // Next, find the visits where the doctor ID matches the one you're interested in
    const doctorVisits = patientVisits.filter(v => v.doctor_id === doctor_id);

    return new Promise(resolve => resolve(doctorVisits[0] ?? null))
  }

  getVisitByDoctor(doctor_id: BigInt): Promise<Visit> {

    const doctorVisit = this.visitTab.filter(v => v.doctor_id === doctor_id);
    return new Promise(resolve => resolve(doctorVisit[0] ?? null))
  }



  getPatientsByDoctorId(doctor_id: BigInt): Promise<Patient[]> {
    // First, filter the visits by doctor ID
    const doctorVisits = this.visitTab.filter(v => v.doctor_id === doctor_id);

    // Next, extract the patient IDs from the filtered visits
    const patientIds = doctorVisits.filter(v => v.patient_id);

    //Finally, extract the patients by the filtered patients
    const patients = this.patientTab.filter(v => v.id == patientIds[0].patient_id);

    return new Promise(resolve => resolve(patients))
  }

}
