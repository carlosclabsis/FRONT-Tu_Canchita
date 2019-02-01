import { Time } from "@angular/common";

export class Local{
    local_id:number;
    local_descripcion:string;
    local_nombre:string;
    local_direccion:string;
    local_hora_apertura:string;
    local_hora_cierre:string;
    dist_id:number;     // FK de distrito al que pertenece el local
    local_telefono:string;
    local_lat:number;
    local_lng:number;
}




