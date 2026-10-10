import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IZodiaco } from './izodiaco';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})

export class Zodiaco {
  formulario!: FormGroup;
  zodiaco: IZodiaco = {
    nombre: '',
    Apaterno: '',
    Amaterno: '',
    dia: 0,
    mes: 0,
    ano: 0,
    sexo: '',
  };
  horoscopo: string = '';
  edad: number = 0;
  imagen: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      Apaterno: new FormControl(''),
      Amaterno: new FormControl(''),
      dia: new FormControl(0),
      mes: new FormControl(0),
      ano: new FormControl(0),
      sexo: new FormControl(''),
    });
  }

  muestraZodiaco(): void {

    this.zodiaco.nombre = this.formulario.value.nombre;
    this.zodiaco.Apaterno = this.formulario.value.Apaterno;
    this.zodiaco.Amaterno = this.formulario.value.Amaterno;
    this.zodiaco.dia = this.formulario.value.dia;
    this.zodiaco.mes = this.formulario.value.mes;
    this.zodiaco.ano = this.formulario.value.ano;
    this.zodiaco.sexo = this.formulario.value.sexo;

    if(this.formulario.value.dia <1 || this.formulario.value.dia >31){
      alert('El dia ingresado no es valido');
      return;
    }else if(this.formulario.value.mes <1 || this.formulario.value.mes >12){
      alert('El mes ingresado no es válido');
      return;
    }else if(this.formulario.value.ano <1990 || this.formulario.value.ano >2026){
      alert('El año ingresado no es válido');
      return;
      
    }

    this.edad = 2026 - this.formulario.value.ano;
    if(this.formulario.value.mes > 10 || (this.formulario.value.mes === 9 && this.formulario.value.dia > 10)) {
      this.edad = this.edad - 1;
    }

    if (this.formulario.value.ano == 1990 || this.formulario.value.ano == 2002 || this.formulario.value.ano == 2014 || this.formulario.value.ano == 2026) {
  this.horoscopo = 'Tu signo zodiacal es caballo';
  this.imagen = 'imagenes/caballo.png';

} else if (this.formulario.value.ano == 1991 || this.formulario.value.ano == 2003 || this.formulario.value.ano == 2015) {
  this.horoscopo = 'Tu signo zodiacal es cabra';
  this.imagen = 'imagenes/cabra.png';

} else if (this.formulario.value.ano == 1992 || this.formulario.value.ano == 2004 || this.formulario.value.ano == 2016) {
  this.horoscopo = 'Tu signo zodiacal es mono';
  this.imagen = 'imagenes/mono.png';

} else if (this.formulario.value.ano == 1993 || this.formulario.value.ano == 2005 || this.formulario.value.ano == 2017) {
  this.horoscopo = 'Tu signo zodiacal es gallo';
  this.imagen = 'imagenes/gallo.png';

} else if (this.formulario.value.ano == 1994 || this.formulario.value.ano == 2006 || this.formulario.value.ano == 2018) {
  this.horoscopo = 'Tu signo zodiacal es perro';
  this.imagen = 'imagenes/perro.png';

} else if (this.formulario.value.ano == 1995 || this.formulario.value.ano == 2007 || this.formulario.value.ano == 2019) {
  this.horoscopo = 'Tu signo zodiacal es cerdo';
  this.imagen = 'imagenes/cerdo.png';

} else if (this.formulario.value.ano == 1996 || this.formulario.value.ano == 2008 || this.formulario.value.ano == 2020) {
  this.horoscopo = 'Tu signo zodiacal es rata';
  this.imagen = 'imagenes/rata.png';

} else if (this.formulario.value.ano == 1997 || this.formulario.value.ano == 2009 || this.formulario.value.ano == 2021) {
  this.horoscopo = 'Tu signo zodiacal es buey';
  this.imagen = 'imagenes/buey.png';

} else if (this.formulario.value.ano == 1998 || this.formulario.value.ano == 2010 || this.formulario.value.ano == 2022) {
  this.horoscopo = 'Tu signo zodiacal es tigre';
  this.imagen = 'imagenes/tigre.png';

} else if (this.formulario.value.ano == 1999 || this.formulario.value.ano == 2011 || this.formulario.value.ano == 2023) {
  this.horoscopo = 'Tu signo zodiacal es conejo';
  this.imagen = 'imagenes/conejo.png';

} else if (this.formulario.value.ano == 2000 || this.formulario.value.ano == 2012 || this.formulario.value.ano == 2024) {
  this.horoscopo = 'Tu signo zodiacal es dragon';
  this.imagen = 'imagenes/dragon.png';

} else if (this.formulario.value.ano == 2001 || this.formulario.value.ano == 2013 || this.formulario.value.ano == 2025) {
  this.horoscopo = 'Tu signo zodiacal es serpiente';
  this.imagen = 'imagenes/serpiente.png';

} else {
  this.horoscopo = 'No se pudo determinar tu horoscopo';
  this.imagen = '';
}

  }
}
