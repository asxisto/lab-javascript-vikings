// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);

    const message = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength);

    this.saxonArmy[indexSaxon].health <= 0 ? this.saxonArmy.splice(indexSaxon, 1) : '';
    // Saxon[indexSaxon].receiveDamage(Viking[indexViking].attack());
    return message;
  }

  saxonAttack() {
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);

    const message = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength);

    this.vikingArmy[indexViking].health <= 0 ? this.vikingArmy.splice(indexViking, 1) : '';

    return message;
  }

  showStatus() {}
}
