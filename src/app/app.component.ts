import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { ListaPhpService } from './services/lista-php.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  requerimientos:any[];

  constructor(private servicio:ListaPhpService){
    this.requerimientos=[];

  }

  async ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(async () =>{
      this.requerimientos= await this.servicio.listar();
    },3000)
    
    
  }
}
