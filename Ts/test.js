console.log('lee');
//array
var numbers = [1, 2, 3, 4, 5, 6];
var people = ['ab', 'cd', 'ef'];
var numbersS = [1, 2, 3, 4, 5];
var stringS = ['ab', 'cb'];
var tuple;
tuple = [1, '1'];
var Stage;
(function (Stage) {
    Stage[Stage["a"] = 1] = "a";
    Stage[Stage["b"] = 2] = "b";
    Stage[Stage["c"] = 3] = "c";
    Stage[Stage["d"] = 4] = "d";
})(Stage || (Stage = {}));
console.log(Stage.b);
