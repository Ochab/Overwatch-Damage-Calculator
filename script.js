class Hero {
  constructor(name, health, shotsPerSecond, ammo, damagePerShot, reloadTime) {
    this.name = name;
    this.health = health;
    this.shotsPerSecond = shotsPerSecond;
    this.ammo = ammo;
    this.damagePerShot = damagePerShot;
    this.reloadTime = reloadTime; // milliseconds
  }
}

let millisecond = 0;
let Tracer = new Hero ('Tracer', 150, 20, 20, 12, 1250);
let Soldier76 = new Hero ('Soldier:76', 200, 8.66, 9.5, 19, 1500);

function fight(redHero, blueHero) {
  while(redHero.health >= 1 && blueHero.health >= 1) {

    if(millisecond % (1000/redHero.shotsPerSecond) === 0) {
      redHero.ammo--;
      blueHero.health -= redHero.damagePerShot;
      console.log(`${redHero.name} Ammo: ${redHero.ammo}, ${blueHero.name} Health: ${blueHero.health}`);
    } else {
      // console.log('x');
    }

    if(millisecond % (1000/blueHero.shotsPerSecond) === 0) {
      blueHero.ammo--;
      redHero.health -= blueHero.damagePerShot;
      console.log(`${blueHero.name} Ammo: ${blueHero.ammo}, ${redHero.name} Health: ${redHero.health}`);
    } else {
      // console.log('x');
    }

    console.log(`— ${millisecond}ms —`);
    millisecond++;
  }
}

fight(Tracer, Soldier76);