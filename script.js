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
let Tracer = new Hero ('Tracer', 150, 20, 40, 6, 1250);
let Soldier76 = new Hero ('Soldier:76', 200, 9, 9.5, 25, 1500);

while(Tracer.health >= 1 && Soldier76.health >= 1) {

  if(millisecond % (1000/Tracer.shotsPerSecond) === 0) {
    Tracer.ammo--;
    Soldier76.health -= Tracer.damagePerShot;
    console.log(`${Tracer.name} Ammo: ${Tracer.ammo}, ${Soldier76.name} Health: ${Soldier76.health}`);
  } else {
    // console.log('x');
  }

  if(millisecond % (1000/Soldier76.shotsPerSecond) === 0) {
    Soldier76.ammo--;
    Tracer.health -= Soldier76.damagePerShot;
    console.log(`${Soldier76.name} Ammo: ${Soldier76.ammo}, ${Tracer.name} Health: ${Tracer.health}`);
  } else {
    // console.log('x');
  }

  console.log(`— ${millisecond}ms —`);
  millisecond = millisecond + 1;
}
