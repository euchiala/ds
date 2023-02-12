import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/model/doctor';
import { Patient } from 'src/model/patient';
import { Visit } from 'src/model/visit';
import { VisitService } from '../../services/visit.service';
@Component({
  selector: 'app-visit-create',
  templateUrl: './visit-create.component.html',
  styleUrls: ['./visit-create.component.css']
})
export class VisitCreateComponent implements OnInit{

  constructor (private visitService:VisitService, private router:Router, private activatedRoute:ActivatedRoute){
    this.patientTab=this.visitService.patientTab;
    this.doctorTab=this.visitService.doctorTab;

  }
  patientSelected:String="";
  doctorSelected:String="";
  doctorTab: Doctor[] = [];
  patientTab: Patient[] = [];
  visitTab: Visit[] = [];
  currentItemID:String="";
  form:any;
  visit : any;

  initForm():void{
    this.form = new FormGroup({
      temperature : new FormControl(null, [Validators.required]),
      bloodpressure : new FormControl(null, [Validators.required]),
      weight : new FormControl(null, [Validators.required]),
      hight : new FormControl(null, [Validators.required]),
      spo2 : new FormControl(null, [Validators.required]),
      diagnostic : new FormControl(null, [Validators.required]),
      patient_id : new FormControl(null, [Validators.required]),
      doctor_id : new FormControl(null, [Validators.required]),
    })
  }
  initFormMember(visit:Visit):void{
      this.form = new FormGroup({
        temperature : new FormControl(visit.temperature, [Validators.required]),
        bloodpressure : new FormControl(visit.bloodpressure, [Validators.required]),
        weight : new FormControl(visit.weight, [Validators.required]),
        hight : new FormControl(visit.hight, [Validators.required]),
        spo2 : new FormControl(visit.spo2, [Validators.required]),
        diagnostic : new FormControl(visit.diagnostic, [Validators.required]),
        patient_id : new FormControl(visit.patient_id, [Validators.required]),
        doctor_id : new FormControl(visit.doctor_id, [Validators.required]),
      })
  }

  
  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    if(!!this.currentItemID){
      this.visitService.getVisitById(this.currentItemID.toString()).then((item1)=>{this.visit=item1 ;this.initFormMember(item1)});
    }else{
      this.initForm();
    }
    

  }
  
  
  onsub():void{
    const ObjectToSubmit = {...this.visit, ...this.form.value}

    this.visitService.saveVisit(ObjectToSubmit).then(()=>{this.router.navigate(["/visit"])});
  }

}
