const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let farmAnimals0 = farmAnimals.split();//split changes string to array
const[moo, neigh, baa, oink, cluck]=farmAnimals0;
console.log(moo, neigh, baa, oink, cluck);


//Remove Horse
let noHorse = farmAnimals0.splice(1,1);
const [bessie,dolly, babe, little]=farmAnimals0;
console.log(farmAnimals0);


//Minus Chicken

let farmAnimals1=farmAnimals0.splice(3,3);
const[blackAndWhite, black, pink]=farmAnimals1;

//Arrays



//console.log(blackAndWhite, black, pink);

const [red, orange, yellow, green, blue, indigo, violet] = colors;//assign var

//leave Indigo
const[r,o,y,g,b,i,v]=colors;//var
const[,,,,,,indg,]=colors;//,-leaves the element
console.log(colors);

//Objetcs
const[muppetName, color, job, partner, song]= muppet;

//assign kermits Job and partner, songs 2,4//keys are nested
const{nestedPartner, nestedJob}=nestedMuppet;
const {song2, song4}=nestedMuppet.album.theMuppetMovie;

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner