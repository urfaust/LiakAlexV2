import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.css']
})
export class StonesComponent implements OnInit {

  constructor() { }

  public displayData : any;

  ngOnInit() {
    axios.get('http://localhost:1337/api/stones').then(d => {
      this.displayData = d.data.data;
      console.log(this.displayData);
      
    })
  }

}
