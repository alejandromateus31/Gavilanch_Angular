import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  imagenURL : string;
  estaCheckeado = true;
  tamanoCheck = false
  colorCheck = true
  anchuraAltura = 100
  colorCheckp = true
  estadoCheckeado = false
  texto : string
  dataCargada : any;
  nombres : string[] = ['Diego Alejandro' , 'Mateus' , 'prueba 1 ' , 'prueba 2']

  personas : any[] = [
    {nombre : "Diego Alejandro Mateus" , edad:100},
    {nombre : "Diego Alejandro Mateus1" , edad:110},
    {nombre : "Diego Alejandro Mateus2" , edad:120},
    {nombre : "Diego Alejandro Mateus3" , edad:130},
    {nombre : "Diego Alejandro Mateus4" , edad:140},

  ];


  ngOnInit(): void {

    setTimeout(() => {
      this.dataCargada = 'dataCargada!';      
    }, 3000);


    this.imagenURL =(<HTMLInputElement>document.getElementById('selectImagen')).value;
  }
  title = 'Angular';
  direccion = 'Avenida siempre viva 742';
  cantidad = 0;
  textoEscrito = "";
  persona ={

    nombre : 'Felipe',
    apellido :'Gavilanch'
  }

  duplicarTexto(valor : string) : string{
    return valor +" " +valor;
  }

  incrementar(){
    this.cantidad ++;
  }

  onTextboxInput(event) {
    console.log(event);
    this.textoEscrito = event.target.value;
  }

  CambiarMayuscula(){
    this.texto = this.texto.toUpperCase();
  }

  CambiarMinuscula(){
    this.texto = this.texto.toLowerCase();
  }


  
}
