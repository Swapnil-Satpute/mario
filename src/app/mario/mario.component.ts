import { Component,HostListener } from '@angular/core';

export enum KEY_Code {
  RIGHT_ARROW = 39,
  UP_ARROW = 38,
  LEFT_ARROW = 37,
  DOWN_ARROW= 40
 }


@Component({
  selector: 'app-mario',
  templateUrl: './mario.component.html',
  styleUrls: ['./mario.component.css']
})
export class MarioComponent  {

  // Declaration of variables
  x = 1;
  y = 0;
  x1=0;
  y1=0;
  Score=0;
  cnt=0;
  gridArr: any[][];

  mushroom : number[][];
  mario: any [][0];

  //keyboard Listner to move mario with limit
  @HostListener('window:keyup',['$event'])
  keyEvent(event: KeyboardEvent){
this.cnt++;
    this.x1 = this.x;
    this.y1 = this.y;
    if(event.keyCode === KEY_Code.LEFT_ARROW)
    {
      console.log('left key');
      this.x--;

    } else if(event.keyCode === KEY_Code.RIGHT_ARROW)
    {
      console.log('Right key');
      this.x++;

    } else if(event.keyCode === KEY_Code.UP_ARROW)
    {
      console.log('UP key');
      this.y--;
    } else if(event.keyCode === KEY_Code.DOWN_ARROW)
    {
      console.log('Down key');
    this.y++;
    }


    if (((this.x>3) ||(this.y > 4))||((this.x < 1) || (this.y < 0)))
    {

      this.x = this.x1;
      this.y = this.y1;

    }
    if( this.mushroom[this.x][this.y] === 1)
    {
      this.Score++;
      this.mushroom[this.x][this.y]=0;
    }

    this.mario[this.y][this.x];


}
  constructor() {
    this.gridArr = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
     ];

    this.mushroom = [
       [0, 0, 1, 0],
       [0, 1, 1, 0],
       [0, 1, 1, 0],
       [0, 1, 0, 0]
     ];
  }

  ngOnInit() {

    this.mario[this.x][this.y];
  }



}
