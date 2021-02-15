// ES2020

// BIGINT
// a new type - a big integer
// if we type 'typeof 355050505' we get 'number'
// to use big int we add n after the number e.g.,
// 'typeof 1n' will return 'bigint'

Number.MAX_SAFE_INTEGER;
9007199254740991;

9007199254740991 + 10;
// will return: 9007199254741000 which is wrong so we need to use bigInt:
9007199254740991n + 10n;
// returns 9007199254741001n

1n + 2n;
//3n
typeof 3n;
// 'bigint'

// OPTIONAL CHAINING OPERATOR ?.
// Let's pretend we're playing Pokemon:
// Will is a pokemon trainer:
let will_pokemon = {
  pikachu: {
    speicies: 'Mouse Pokemon',
    height: 0.4,
    weight: 6
  }
};
let andrei_pokemon = {
  raichu: {
    speicies: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
};
let weight = will_pokemon.pikachu.weight;
console.log('weight', weight);

let weight2 = andrei_pokemon.pikachu.weight;
console.log('weight', weight);
// the above will throw an error as Andrei doesn't have a pikachu
// So in the past we would use an if statement:
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
  let weight2 = andrei_pokemon.pikachu.weight;
} else {
  let weight2 = undefined;
}
console.log('weight', weight2);

// Optional Chaining avoids the constant && checking:
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log('weight3', weight3);

// NULLISH COALESCING OPERATOR ??
let andrei_pokemon = {
  pikachu: {
    speicies: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    // power: 'lightning'
    power: 0
  }
};
// if we aren't sure if the pokemon has the power property:
let power = andrei_pokemon?.pikachu?.power || 'no power';
console.log(power);
// if power: '' or 0, using the || it checks to see if the statement is truthy and as the string is empty it returns false so we get 'no power'
// if we want to include an empty string or 0 as truthy we use the nullish coalescing operator
let power = andrei_pokemon?.pikachu?.power ?? 'no power';
console.log(power);
