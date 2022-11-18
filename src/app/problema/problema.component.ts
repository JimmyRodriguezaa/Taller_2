import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {

  ejercicio_1!:string;
  mensaje!:string;
  
  btnValidar = (numero: number)=>{
    if (numero > 0) {
      this.mensaje = "El número es positivo: "+numero

    }else if (numero < 0) {
      this.mensaje = "El número es negativo: "+numero
        
    }else if (numero === 0){
      this.mensaje = "El número es cero: "+numero

    }else{
      this.mensaje = "Ingrese un número"

    }
};

  constructor() { 
    this.ejercicio_1 = "1.	Realice un programa que reciba un número y que determine si es positivo o negativo. Imprima el resultado."
  }
  ngClicked(btnValidar:Event):void{
    console.log('Event ->', btnValidar);
  }
  ngOnInit(): void {
  }

}
