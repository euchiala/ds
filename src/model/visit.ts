export interface Visit {
    id: bigint;
    temperature: string;
    bloodpressure: string;
    weight: string;
    hight: string;
    spo2: string;
    visitDate: Date;
    diagnostic: string;
    patient_id : bigint;
    doctor_id : bigint;

}