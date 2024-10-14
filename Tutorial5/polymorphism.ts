class Animal {
    speak(): void {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak(): void {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    speak(): void {
      console.log("The cat meows.");
    }
  }
  
  function makeAnimalSpeak(animal: Animal): void {
    animal.speak();
  }
  
// instances for subclasses
const dog = new Dog();
const cat = new Cat();
  
makeAnimalSpeak(dog);
makeAnimalSpeak(cat);

// deno run polymorphism.ts