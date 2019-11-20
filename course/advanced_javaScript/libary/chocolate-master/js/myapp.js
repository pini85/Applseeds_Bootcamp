// var testsPassed = 0;
// var numOftests = 7;
// console.log("starting test...");

// try {
//   //------------------------------------------------

//   var attrTest = $C("#attr-test");
//   attrTest.attr("data-test", "12345");
//   var res = attrTest.attr("data-test");
//   if (res != "12345") {
//     console.log("Failed set/get attribute (id selector)");
//   } else {
//     testsPassed++;
//     console.log("Passed set/get attribute (id selector)");
//   }

//   //------------------------------------------------

//   attrTest = $C(".attr-test");
//   attrTest.attr("data-test", "12345");
//   res = attrTest.attr("data-test");
//   if (res != "12345") {
//     console.log("Failed set/get attribute (class selector)");
//   } else {
//     testsPassed++;
//     console.log("Passed set/get attribute (class selector)");
//   }

//   //------------------------------------------------

//   attrTest = $C(".does-not-exists");
//   try {
//     res = attrTest.attr("data-test");
//     console.log("Passed get attribute of empty elements array");
//     testsPassed++;
//   } catch (e) {
//     console.log("Failed get attribute of empty elements array");
//   }

//   //------------------------------------------------

//   var classTest = $C(".attr-test");
//   classTest.addClass("check");
//   var c1 = document.getElementsByClassName("attr-test");
//   var c2 = document.getElementsByClassName("check");
//   if (c1.length == c2.length) {
//     console.log("Passed add class");
//     testsPassed++;
//   } else {
//     console.log("Failed add class");
//   }

//   //------------------------------------------------

//   classTest.removeClass("check");
//   if (c2.length == 0) {
//     console.log("Passed remove class");
//     testsPassed++;
//   } else {
//     console.log("Failed remove class");
//   }

//   //------------------------------------------------

//   classTest.removeClass("attr-test");
//   if (c1.length == 0) {
//     console.log("Passed remove class advanced");
//     testsPassed++;
//   } else {
//     console.log("Failed remove class advanced maybe this could help");
//     console.log(
//       "https://stackoverflow.com/questions/33107929/for-loop-on-nodelist-to-change-classname"
//     );
//   }

//   //------------------------------------------------

//   var testRemove = $C(".to-remove");
//   testRemove.remove();
//   var testRemoveJS = document.getElementsByClassName("to-remove");
//   if (testRemoveJS.length == 0) {
//     console.log("Passed remove element");
//     testsPassed++;
//   } else {
//     console.log("Failed remove element maybe this could help");
//     console.log(
//       "https://stackoverflow.com/questions/33107929/for-loop-on-nodelist-to-change-classname"
//     );
//   }

//   //------------------------------------------------

//   console.log("Passed " + testsPassed + "/" + numOftests + " tests");
//   if (testsPassed == numOftests) {
//     console.log("PASSED ALL TESTS!!!!!!");
//   } else {
//     console.error("Please fix the errors");
//     console.log("Find solutions to a common error:");
//   }
// } catch (e) {
//   console.log("Passed " + testsPassed + "/" + numOftests + " tests");
//   if (testsPassed != numOftests) {
//     console.error("something went wrong ", e);
//   }
// }
