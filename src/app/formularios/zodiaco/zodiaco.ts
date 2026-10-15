import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IZodiaco } from './izodiaco';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco implements OnInit {
  formulario!: FormGroup;

  zodiaco: IZodiaco = {
    nombre: '',
    Apaterno: '',
    Amaterno: '',
    dia: 0,
    mes: 0,
    ano: 0,
    sexo: '',
    edad: 0,
    horoscopo: '',
  };

  zodiacos: IZodiaco[] = [];

  indiceEdicion: number = -1;

  horoscopo: string = '';
  edad: number = 0;
  imagen: string = '';

  constructor(private router: Router) {}

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

    this.cargarZodiacos();
  }

  agregarZodiaco(): void {
    if (
      this.zodiaco.nombre === '' ||
      this.zodiaco.Apaterno === '' ||
      this.zodiaco.Amaterno === '' ||
      this.zodiaco.sexo === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.zodiaco = {
      ...this.zodiaco,
      edad: this.edad,
      horoscopo: this.horoscopo,
    };

    if (this.indiceEdicion !== -1) {
      this.zodiacos[this.indiceEdicion] = {
        ...this.zodiaco,
      };
    } else {
      this.zodiacos.push({ ...this.zodiaco });
    }

    localStorage.setItem('zodiacos', JSON.stringify(this.zodiacos));

    this.limpiarCampos();
  }

  cargarZodiacos(): void {
    const datos = localStorage.getItem('zodiacos');

    if (datos) {
      this.zodiacos = JSON.parse(datos);
    }
  }

  editarZodiaco(index: number): void {
    this.zodiaco = {
      ...this.zodiacos[index],
    };

    const zodiaco = this.zodiacos[index];

    this.formulario.patchValue({
      nombre: zodiaco.nombre,
      Apaterno: zodiaco.Apaterno,
      Amaterno: zodiaco.Amaterno,
      dia: zodiaco.dia,
      mes: zodiaco.mes,
      ano: zodiaco.ano,
      sexo: zodiaco.sexo,
    });

    this.indiceEdicion = index;
  }

  eliminarZodiaco(index: number): void {
    this.zodiacos.splice(index, 1);

    localStorage.setItem('zodiacos', JSON.stringify(this.zodiacos));
  }

  limpiarCampos(): void {
    this.formulario.reset();
    this.indiceEdicion = -1;
  }

  muestraZodiaco(): void {
    this.zodiaco.nombre = this.formulario.value.nombre;
    this.zodiaco.Apaterno = this.formulario.value.Apaterno;
    this.zodiaco.Amaterno = this.formulario.value.Amaterno;
    this.zodiaco.dia = Number(this.formulario.value.dia);
    this.zodiaco.mes = Number(this.formulario.value.mes);
    this.zodiaco.ano = Number(this.formulario.value.ano);
    this.zodiaco.sexo = this.formulario.value.sexo;

    if (
      this.zodiaco.nombre === '' ||
      this.zodiaco.Apaterno === '' ||
      this.zodiaco.Amaterno === '' ||
      this.zodiaco.sexo === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.formulario.value.dia < 1 || this.formulario.value.dia > 31) {
      alert('El dia ingresado no es valido');
      return;
    } else if (this.formulario.value.mes < 1 || this.formulario.value.mes > 12) {
      alert('El mes ingresado no es válido');
      return;
    } else if (this.formulario.value.ano < 1900 || this.formulario.value.ano > 2026) {
      alert('El año ingresado no es válido');
      return;
    }

    this.edad = 2026 - this.formulario.value.ano;

    if (
      this.formulario.value.mes > 10 ||
      (this.formulario.value.mes === 9 && this.formulario.value.dia > 10)
    ) {
      this.edad = this.edad - 1;
    }

   switch ((this.zodiaco.ano - 1900) % 12) {
  case 0:
    this.horoscopo = 'Tu signo zodiacal es caballo';
    this.imagen = 'imagenes/caballo.png';
    break;
  case 1:
    this.horoscopo = 'Tu signo zodiacal es cabra';
    this.imagen = 'imagenes/cabra.png';
    break;
  case 2:
    this.horoscopo = 'Tu signo zodiacal es mono';
    this.imagen = 'imagenes/mono.png';
    break;
  case 3:
    this.horoscopo = 'Tu signo zodiacal es gallo';
    this.imagen = 'imagenes/gallo.png';
    break;
  case 4:
    this.horoscopo = 'Tu signo zodiacal es perro';
    this.imagen = 'imagenes/perro.png';
    break;
  case 5:
    this.horoscopo = 'Tu signo zodiacal es cerdo';
    this.imagen = 'imagenes/cerdo.png';
    break;
  case 6:
    this.horoscopo = 'Tu signo zodiacal es rata';
    this.imagen = 'imagenes/rata.png';
    break;
  case 7:
    this.horoscopo = 'Tu signo zodiacal es buey';
    this.imagen = 'imagenes/buey.png';
    break;
  case 8:
    this.horoscopo = 'Tu signo zodiacal es tigre';
    this.imagen = 'imagenes/tigre.png';
    break;
  case 9:
    this.horoscopo = 'Tu signo zodiacal es conejo';
    this.imagen = 'imagenes/conejo.png';
    break;
  case 10:
    this.horoscopo = 'Tu signo zodiacal es dragon';
    this.imagen = 'imagenes/dragon.png';
    break;
  case 11:
    this.horoscopo = 'Tu signo zodiacal es serpiente';
    this.imagen = 'imagenes/serpiente.png';
    break;
  default:
    this.horoscopo = 'No se pudo determinar tu horoscopo';
    this.imagen = '';
    break;
}

    this.agregarZodiaco();
  }
}
