import {Entity} from "./entity";

export class Enemy extends Entity {

  public static newEnemys : {[index : string]:Enemy[]} = {
    "shop": [new Enemy('Shopkeeper Dord', 100, 0, 0)],
    "forest": [
      new Enemy("Baumwächter", 120, 15, 10),
      new Enemy("Moosbestie", 80, 10, 8),
      new Enemy("Schattenfuchs", 60, 8, 5),
      new Enemy("Naturgeist", 100, 12, 12),
      new Enemy("Waldnymphe", 70, 10, 6),
      new Enemy("Eulenwächter", 90, 12, 7),
      new Enemy("Matschgeist", 50, 6, 3),
      new Enemy("Waldtitan", 180, 25, 15) // BOSS
    ],

    "fels": [
      new Enemy(" Berglurch  ", 100, 12, 10),
      new Enemy(" Felsenkriecher  ", 80, 10, 12),
      new Enemy(" Lavagreifer  ", 120, 15, 8),
      new Enemy(" Erdbebenwurm  ", 150, 18, 12),
      new Enemy(" Adlerhorst-Jäger  ", 70, 8, 6),
      new Enemy(" Kristallspinne  ", 90, 14, 7),
      new Enemy(" Sturmberserker  ", 110, 14, 9),
      new Enemy("Geisteinskoloss", 200, 20, 18) // Boss
    ],
    "wueste": [
      new Enemy(" Sandsturm-Schlange  ", 80, 10, 6),
      new Enemy(" Skarabäus-Krieger  ", 90, 12, 8),
      new Enemy(" Feuergeist  ", 100, 14, 10),
      new Enemy(" Oasen-Schrecken  ", 120, 15, 12),
      new Enemy(" Wüstenspuk  ", 70, 8, 5),
      new Enemy(" Sonnenflügler  ", 110, 14, 9),
      new Enemy(" Sanddünen-Spucker  ", 60, 10, 4),
      new Enemy("Flammenphönix", 180, 25, 15) // Boss
    ],
    "gletscher": [
      new Enemy("  Frostwolf  ", 90, 12, 8),
      new Enemy(" Eiszombie  ", 80, 10, 6),
      new Enemy(" Schneeeule  ", 70, 8, 5),
      new Enemy(" Frostkobold  ", 60, 8, 4),
      new Enemy(" Gletschergeist  ", 100, 14, 10),
      new Enemy(" Eiswyrm  ", 120, 15, 12),
      new Enemy(" Avalanche-Golem  ", 110, 14, 9),
      new Enemy("Eisdrache",200,20,18) // Boss
    ]
  }

  expGiven = -1
  coinsGiven = -1
  img = ""
  lvlReq = 0

  constructor(name: string, health: number, damage: number, defence: number,lvlReq = 0 , expGive = 0, coinsGiven = 0, img = "") {
    super(name, health, damage, defence);
    this.expGiven = expGive
    this.coinsGiven = coinsGiven
    this.img = img
    this.lvlReq = lvlReq
  }
}


