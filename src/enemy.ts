import {Entity} from "./entity";

export class Enemy extends Entity{
  public static  ENEMYS =
    [
      new Enemy("Ghost", 8, 1, 0),
      new Enemy("Slime", 10, 1, 1),
      new Enemy("Spider", 12, 2, 1),
      new Enemy("Zombie", 18, 4, 2),
      new Enemy("Skeleton", 15, 3, 1),
      new Enemy("Goblin", 20, 5, 2),
      new Enemy("Orc", 25, 8, 3),
      new Enemy("Vampire", 35, 12, 8),
      new Enemy("Werewolf", 30, 10, 5),
      new Enemy("Dragon", 100, 30, 10)
    ]

    expGiven = -1
    coinsGiven = -1

  constructor(name : string,health : number,damage : number,defence : number,expGive = 0 ,coinsGiven = 0 ) {
    super(name,health,damage,defence);
    this.expGiven = expGive
    this.coinsGiven = coinsGiven
  }
}


