import { Schedule } from '../models/schedule.model';

export const SCHEDULE: Schedule[] =[
    { id:1, task:'Alimentar gallinas', time:'7hs', employee:'Empleado 01'},
    { id:2, task:'Recoger huevos', time:'8:30hs', employee:'Empleado 02'},
    { id:3, task:'Seccionar alimento', time:'10hs', employee:'Empleado 03'},
    { id:4, task:'Envío de mercadería', time:'11:30hs', employee:'Empleado 02'},

    { id:5, task:'Alimentar gallinas', time:'12:30hs', employee:'Empleado 03'},
    { id:6, task:'Recoger huevos', time:'14hs', employee:'Empleado 01'},
    { id:7, task:'Limpieza de gallinero', time:'15hs', employee:'Empleado 03'},
    { id:8, task:'Revisión de inventario', time:'16hs', employee:'Empleado 02'}
];
