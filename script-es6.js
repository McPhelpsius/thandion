class person {
  constructor(options) {
    this.fname = options.fname;
    this.race = options.race;
    this.clique = options.clique;
    this.baseStrength = options.baseStrength;
    this.baseAgility = options.baseAgility;
    this.baseIntelligence = options.baseIntelligence;
    this.baseMovement = options.baseMovement;
    this.baseDefense = options.baseDefense;
    this.baseMeleeOB = options.baseMeleeOB;
    this.baseMissileOB = options.baseMissileOB;
    this.baseGeneral = options.baseGeneral;
    this.baseSubterfuge = options.baseBubterfuge;
    this.basePerception = options.basePerception;
    this.baseMagical = options.baseMagical;
    this.fullLife = options.fullLife;
    this.currentLife = options.currentLife;
    this.experience = options.experience;
    this.weapon = options.weapon;
  }

  unequipWeapon() {
    this.strength -= this.weapon.damage;
    this.weapon = 'hand';
  }

  equipWeapon(weapon) {
    this.weapon = weapon;
    this.strength = this.baseStrength + weapon.damage;
  }

  equipMagic(magic){
    this.magic = magic;
    this.fullMagical = this.baseMagical + magic.damage;
  }

  takeDamage(damage) {
    this.currentLife -= damage;
    if(this.currentLife <=0){
      this.loseFight();
    }
  }

  beginFight(enemy){
    if(this.oponnent != null){
      this.opponent = null;
    }
    this.opponent = enemy;
  }

  winFight(){
    let enemy = this.opponent.title;
    this.opponent = null;
    console.log(enemy + " is dead! You circle around its lifeless corpse in an arrogant victory dance. Please stop shaking your rump.");
  }

  loseFight(){
    let enemy = this.opponent.title;
    this.opponent = null;
    console.log(enemy + " has killed you. Now it will take you home and stuff you, using you as a decoration.");
  }

  physicalAttack(){
    this.opponent.life -= this.fullMagical;
    if(this.opponent.life <= 0){
      this.winFight();
    }
  }

  castSpell(){
    this.opponent.life -= this.fullMagical;
    if(this.opponent.life <= 0){
      this.winFight();
    }
  }

  render() {
    console.log(this);
  }
}

class weapon {
  constructor(options) {
    this.title = options.title;
    this.damage = options.damage;
    this.defense = options.defense;
    this.agility = options.agility;

    this.render();
  }

  render() {
    console.log(this);
  }
}

class magic {
  constructor(options) {
    this.title = options.title;
    this.damage = options.damage;
  }

  render() {
    console.log(this);
  }
}

class enemy {
  constructor(options){
    this.title = options.title;
    this.fullLife = options.fullLife;
    this.life = options.life;
    this.damage = options.damage;
  }
}

let sword = new weapon({
  title: 'Sword',
  damage: 5,
  defense: 7,
  agility: 6
});

let thandion = new person({
  fname: 'Thandion',
  race: 'Elf',
  clique: 'Bard',
  baseStrength: 1,
  baseAgility: 1,
  baseIntelligence: 3,
  baseMovement: 1,
  baseDefense: 1,
  baseMeleeOB: 0,
  baseMissileOB: 1,
  baseGeneral: 1,
  baseSubterfuge: 0,
  basePerception: 2,
  baseMagical: 1,
  fullLife: 40,
  currentLife: 40,
  experience: 0,
  weapon: 'hand'
});

let speed = new magic({
  title: 'Speed',
  damage: 4
});

let gorlak = new enemy({
  title: 'Gorlak',
  damage: 3,
  life: 30,
  fullLife: 30
});
