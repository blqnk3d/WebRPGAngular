

export class Entity {

  name = ""

  private health = 0
  damage = 0
  defence = 0

  lvl = 0
  lvlCap = 100

  exp = 0
  expCap = 100

  save = -1

  constructor(name: string, health: number, damage: number, defence: number) {
    this.name = name

    this.health = health
    this.damage = damage
    this.defence = defence
    this.save = health

  }


  fight(attackDMG: number) {
    let c = 100; // Constante
    let damage = c * attackDMG / (c + this.defence);
    this.health = Math.round(this.health - damage);
  }


  gethealth(): number {
    return this.health;
  }

  reset(){
    this.health = this.save
  }
}
