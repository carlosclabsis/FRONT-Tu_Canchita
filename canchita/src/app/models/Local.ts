import { Time } from "@angular/common";

export class Local{
    localId:string;
    localDescripcion:string;
    localNombre:string;
    localDireccion:string;
    localHoraApertura:string;
    localHoraCierre:string;
    distId:number;     // FK de distrito al que pertenece el local
    localTelefono:string;
    localLat:number;
    localLng:number;
}




