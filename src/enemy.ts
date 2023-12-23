import {Entity} from "./entity";

export class Enemy extends Entity{
  constructor(name : string,health : number,damage : number,defence : number) {
    super(name,health,damage,defence);
  }
}
