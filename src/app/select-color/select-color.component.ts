import { Component, OnInit } from '@angular/core';
import { SetColorService } from '../shared/services/set-color.service';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent implements OnInit {

  colors = ['green', 'blue', 'pink', 'red'];
  constructor(private colorService: SetColorService) { }

  ngOnInit(): void{
  }

  public setColor(color: any){
    color = color.value;
    if(color != null){
      this.colorService.setColor(color);      
    }
  }
}