` >> Classes
     Just like classification in real life, class is used to classify things into divisions
     Now, in this case I'd like to classify Wizards in Harry Potter movie into 3 different classes
     One is for the class "Wizard" itself and act as universe of the other 2 classes
     While the other classes are for members of Hogwarts School, in this case the class "Professor" and "Student"`;

` Before we jump into the actual practice of creating OOP, we should know that there is a structure in OOP:
• Classes
• Objects
• Methods

We'll going to know more about these while looking at the example`;

class Wizard {
  // >> Objects, are the data that constructs the class
  constructor(name, wandSize, wandMaterial, patronus) {
    this.name = name;
    this.wand = {
      wandSize: wandSize,
      wandMaterial: wandMaterial,
    };
    this.patronus = patronus;
  }

  // >> Methods, are the behavior of the objects that are created from class,
  // in this example I'll try to create method to change wand of the wizard
  // and show all the information that the wizard has.

  // >> setter is one way to create a method to update a value of an object,
  // as I said earlier, I want to change the wand of a wizard.
  set wandSize(newWandSize) {
    this.wand["wandSize"] = newWandSize;
  }

  set wandMaterial(newWandMaterial) {
    this.wand.wandMaterial = newWandMaterial;
  }

  // >> getter is a way for us to get infos from the wizard

  get wizardInfos() {
    const wizardInfo = {
      name: this.name,
      wand: {
        wandSize: this.wand.wandSize,
        wandMaterial: this.wand.wandMaterial,
      },
    };

    return wizardInfo;
  }
}

` >> I am going to add Harry Potter as a new wizard and show his profile

uncomment below to see the output`;

// const harryPotter = new Wizard(
//   "Harry Potter",
//   "11 inches",
//   "Holly and Phoenix Feather",
//   "Stag"
// );

// console.log(harryPotter.wizardInfos);

` >> And since Harry's wand has already broken, I'd like to change it with the new one he got

uncomment below to see the output`;

// harryPotter.wandSize = "10 inches";
// harryPotter.wandMaterial = "Hawthorn and Unicorn Hair";

// console.log(harryPotter.wizardInfos);

` >> Now that we've already created a class for Wizard,
I now want to create a class for Professors in Hogwarts
and I want it to shows all the infos of them`;

class Professor extends Wizard {
  // >> The objects of this class must contain the objects that the parent has
  // and it can have its own objects too!
  constructor(name, wandSize, wandMaterial, patronus, headOfHouse, teaches) {
    // >> while using super, the subclass will get all the properties
    // that has already been declared to construct the parent
    // so we won't need to declare them anymore! :D
    super(name, wandSize, wandMaterial, patronus);
    this.headOfHouse = headOfHouse;
    this.teaches = teaches;
  }

  get professorInfos() {
    return {
      ...this.wizardInfos,
      headOfHouse: this.headOfHouse,
      teaches: this.teaches,
    };
  }
}

` >> I am going to add Professor McGonagall as a new professor and show her profile

uncomment below to see the output`;

// const mcGonagall = new Professor(
//   "Minerva McGonagall",
//   "9 1/2 inches",
//   "Fir and Dragon Heartstring",
//   "Cat",
//   "Gryffindor",
//   "Transfiguration"
// );

// console.log(mcGonagall.professorInfos);

` >> We also can change the professor's wand too without setting it in its own class
     because not only properties of class that inherits, but also the methods.
     
     For example if I want to change professor McGonagall's wand:
     
     uncomment below to see the output`;

// mcGonagall.wandSize = "unknown length";
// mcGonagall.wandMaterial = "unknown wood and core";

// console.log(mcGonagall.professorInfos);

` >> Finally, I'm going to create our last class which is a class for students in Hogwarts and show their infos too!`;

class Student extends Wizard {
  // In this class, the objects also need to contain the same objects as its parents
  // but it doesn't need to have the same object as what the professors in class "Professor" have
  constructor(
    name,
    wandSize,
    wandMaterial,
    patronus,
    house,
    schoolYear,
    takenSubjects
  ) {
    super(name, wandSize, wandMaterial, patronus);
    this.house = house;
    this.schoolYear = schoolYear;
    this.takenSubjects = takenSubjects;
  }

  // I'm going to show some of their infos,
  // but this time it might be slightly different from the class Professor,
  // because I want the students to show their info but as a wizard not as a student of Hogwarts.
  // So I'm going to rewrite the wizardInfos method and define it as students own method.

  get wizardInfos() {
    return `Hi! I am ${this.name}, I'm a student at Hogwarts School year ${this.schoolYear}, my house is ${this.house} and I'm taking these subjects at school: ${this.takenSubjects}`;
  }
}

` >> I'm putting Hermione Granger into this class

uncomment below to see the output`;

// const hermioneGranger = new Student(
//   "Hermione Granger",
//   "10 3/4 inches",
//   "Vine Wood and Dragon Heartstring",
//   "Otter",
//   "Gryffindor",
//   3,
//   "ALL!! I LOVE STUDYING"
// );

// console.log(hermioneGranger.wizardInfos);

`I've created a new student and when it called the method wizardInfos, it returns back the new method that we just wrote for it.
But aren't you curious whether or not the method of the parent changes too?
The answer for that is no, the method is only changed for the child and not with the parent. This is what we call "method overriding"
I'll give you a prove by creating another new Wizard and calling the infos

uncomment below to see the output`;

// const albusDumbledore = new Wizard(
//   "Albus Percival Wulfric Brian Dumbledore",
//   "15 inches",
//   "Elder and Thestral tail hair core",
//   "Phoenix"
// );

// console.log(albusDumbledore.wizardInfos);
