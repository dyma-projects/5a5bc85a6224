import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  compteurEnfant : number = 0;
  @Output() changementValeurCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  augmenter(){
  	this.compteurEnfant++;
  	this.changementValeurCompteur.emit({
  		value: this.compteurEnfant
  	});
  } 
  diminuer(){
  	this.compteurEnfant--;
  	this.changementValeurCompteur.emit({
  		value: this.compteurEnfant
  	});
  }

}
