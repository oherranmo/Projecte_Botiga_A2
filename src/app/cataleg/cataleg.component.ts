import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css','../../assets/css/Default.css']
})

export class CatalegComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    let cataleg = document.getElementById("cataleg")
    console.log(cataleg);

    let generarCataleg =()=>{}
  }
}
