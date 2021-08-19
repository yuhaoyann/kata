const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const ingredientCheck = function(bakery) {
    let out1 = [];
    for (let i = 0; i < recipes.length; i++) {
      for (let recipe of recipes[i].ingredients) {
        for (bake of bakery) {
          if (bake === recipe) {
            out1.push(recipes[i].name);
          }
        }
      }
  
    }
    return out1;
  }
  let A = ingredientCheck(bakeryA);
  let B = ingredientCheck(bakeryB);
  for (let a of A) {
    for (let b of B) {
      if (a === b) {
        return a;
      }
    }
  }
  // Code here!
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));