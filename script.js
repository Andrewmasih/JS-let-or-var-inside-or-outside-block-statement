
/*VAR allows to reference a variable before it is decleared. this is due to VAR declearations been 'hoisted' to the top of the code block when its run. 
 */
function showBanana ()  {
  banana = "A banana!";
  console.log (banana);
  var banana;

}

function showApple () {
  apple = "An apple!"
  console.log (apple);
  let apple;
  /*LET varibles are not hoisted, so you cannot referenece them before they are decleared*/

}

showBanana();
showApple();

function hello () {
  let greeting = "hello"
}
/*when we try to access variables outside the scope we get a 'referance error', not defined, because its not accessible.  */
greeting;

