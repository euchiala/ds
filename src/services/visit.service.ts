import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Doctor } from 'src/model/doctor';
import { Patient } from 'src/model/patient';
import { Visit } from 'src/model/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  doctorTab: Doctor[] = GLOBAL._DB.doctors;
  patientTab: Patient[] = GLOBAL._DB.patients;
  visitTab: Visit[] = GLOBAL._DB.visits;
  
  saveVisit(visit:any):Promise<Visit>
  {
    const visitToSave = {...visit,
      id: visit.id ?? Math.ceil((Math.random()*10000)).toString(),
      visitDate : new Date().toISOString()
    }
    this.visitTab = [visitToSave,...this.visitTab.filter(item  => item.id!=visitToSave.id)]

    return new Promise(resolve => resolve(visitToSave))
  }
  
  getVisitById(id:string):Promise<Visit>{

    return new Promise(resolve => resolve(this.visitTab.filter(item  => item.id.toString() === id)[0]??null))
  }

  getAllVisits():Promise<Visit[]>{
    
    return new Promise(resolve => resolve(this.visitTab))
   
  }

}
