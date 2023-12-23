export class Entity {

  name = ""

  health = 0
  damage = 0
  defence = 0

  lvl = 0
  lvlCap = 100

  exp = 0
  expCap = 100


  constructor(name : string,health : number,damage : number,defence : number) {
    this.name = name

    this.health = health
    this.damage = damage
    this.defence = defence

  }

}
