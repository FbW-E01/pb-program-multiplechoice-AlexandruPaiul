// # Switch if...

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const color = "red";
switch (color) {
  case "red":
    console.log("do not go");
    break;
  case "blue":
    console.log("wait a bit ");
    break;
  case "green":
    console.log("go go go");
    break;
  default:
    console.log("stop");
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.
const grade = 12;

switch (grade) {
  case 1:
  case 2:
  case 3:
    console.log("not bad");
    break;
  case 4:
  case 5:
  case 6:
    console.log("good");
    break;
  case 7:
  case 8:
  case 9:
    console.log("very good");
    break;
  default:
    console.log("awesome");
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

const fruit = "banana";
switch (fruit) {
  case "banana":
    console.log("do not eat");
    break;
  case "orange":
    console.log("eat");
    break;
  case "strawberry":
    console.log("delicious");
    break;
  default:
    console.log("apple Adam and Eva");
}

// #### 4. Percentage Complete.
// * If percentageComplete is below 30, print "Still a long way to go".
// * If the percentageComplete is between 30 and 50, print "Slowly getting there".
// * If percentageComplete is between 51 and 80, print "You can do it!".
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!".
const percentageComplete = 100;

switch (true) {
  case percentageComplete < 30:
    console.log("Still a long way to go");
    break;
  case percentageComplete > 30 && percentageComplete < 50:
    console.log("Slowly getting there");
    break;
  case percentageComplete > 51 && percentageComplete < 80:
    console.log("You can do it!");
    break;
  case percentageComplete > 81 && percentageComplete < 99:
    console.log("This is the last push!");
    break;
  default:
    console.log("You're there. Well done!");
}

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
// I think with if else it is more clear but with switch is more simple
