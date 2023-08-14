import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = "Calculadora de IMC";
  subtitle: string = "Calcule o seu IMC";

  constructor() {}
}
