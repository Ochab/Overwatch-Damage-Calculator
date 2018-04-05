let heroHealth = 150;
let heroShotsPerSecond = 20;
let heroAmmo = 40;
let heroDamagePerShot = 6;

let enemyHealth = 200;
let enemyShotsPerSecond = 9;
let enemyDamagePerShot = 9.5;
let enemyAmmo = 25;

let millisecond = 0;

while(heroHealth >=1 && enemyHealth >= 1) {

  if(millisecond % 50 === 0) {
    heroAmmo = heroAmmo -1;
    enemyHealth = enemyHealth -heroDamagePerShot;
    console.log(`Hero Ammo: ${heroAmmo}, Enemy Health: ${enemyHealth}`);
  } else {
    // console.log('x');
  }

  if(millisecond % 111.111111111 === 0) {
    enemyAmmo = enemyAmmo -1;
    heroHealth = heroHealth -enemyDamagePerShot;
    console.log(`Enemy Ammo: ${enemyAmmo}, Hero Health: ${heroHealth}`);
  } else {
    // console.log('x');
  }

  console.log(`— ${millisecond}ms —`);
  millisecond = millisecond +1;
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