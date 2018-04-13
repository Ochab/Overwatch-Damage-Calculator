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
let Soldier76 = new Hero ('Solider:76', 200, 9, 9.5, 25, 1500);

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





































// class Hero  {
//   constructor(heroName, heroHealth) {
//     this.heroName   = heroName;
//     this.heroHealth = heroHealth;
//   }
// }


// fireWeapon() {
//   let damagePerShot    = 6;
//   let shotsPerMagazine = 40;
//   let shotsPerSecond   = 20;
//   let reloadTime       = 1.25;
//   let heroHealth       = 150;
//   let enemyHealth      = 200;




//   function reload(ammo) {
//   }

// let enemyHealth = 200;
// let ammo = 40;

// while(enemyHealth >= 1) {
//   ammo = ammo -1;
//   enemyHealth = enemyHealth -1;
//   console.log(ammo);
//   console.log(enemyHealth);
// }


// class Weapon {
//   constructor() {
//     this.damagePerShot    = 6,
//     this.shotsPerMagazine = 40,
//     this.shotsPerSecond   = 20,
//     this.reloadTime       = 1.25
//   }
//   shot() {

//   }
//   while (tracer.shotsPerMagazine >= 1 && soldier.heroHealth >= 1 && tracer.heroHealth >= 1) {
//     shotsPerMagazine --1;
//   } else {
// }

// class pulsePistol {
//   constructor() {
//     this.damagePerShot    = 6,
//     this.shotsPerMagazine = 40,
//     this.shotsPerSecond   = 20,
//     this.reloadTime       = 1.25
//   }
//   shot() {

//   }
//   while (tracer.shotsPerMagazine >= 1 && soldier.heroHealth >= 1 && tracer.heroHealth >= 1) {
//     shotsPerMagazine --1;
//   } else {
// }

// class heavyPulseRifle {
//   constructor() {
//     this.damagePerShot    = 6,
//     this.shotsPerMagazine = 40,
//     this.shotsPerSecond   = 20,
//     this.reloadTime       = 1.25
//   }
//   shot() {

//   }
//   while (tracer.shotsPerMagazine >= 1 && soldier.heroHealth >= 1 && tracer.heroHealth >= 1) {
//     shotsPerMagazine --1;
//   } else {
// }


// const tracer new Hero('Tracer', 150);



// function battle(heroOne, heroOneWeapon, heroTwo, heroTwoWeapon) {

// }


// // class Tracer extend Hero {
// //   name    : 'Tracer',
// //   health  : 150,

// //   // weapons : [
// //   //   {
// //   //     weaponName        : 'Pulse Pistols',
// //   //     damagePerShot     : 6,
// //   //     shotsPerMagazine  : 40,
// //   //     shotsPerSecond    : 0,
// //   //     reloadTime        : 1.25,
// //   //     weaponNotes       : ''
// //   //   }
// //   // ]
// // }

// // let soldier76 = {
// //   name    : 'Tracer',
// //   health  : 200,
// //   armor   : 0,
// //   shields : 0,
// //   weapons : [
// //     {
// //       weaponName        : 'Heavy Pulse Rifle',
// //       damagePerShot     : 9.5,
// //       shotsPerMagazine  : 20,
// //       shotsPerSecond    : 9,
// //       reloadTime        : 1.5,
// //       weaponNotes       : ''
// //     },
// //     {
// //       weaponName        : 'Helix Rifle',
// //       damagePerShot     : 120,
// //       shotsPerMagazine  : 1,
// //       shotsPerSecond    : .125,
// //       reloadTime        : 8,
// //       weaponNotes       : ''
// //     }
// //   ]
// // ]


// // console.log(Hero);
// console.log(tracer);