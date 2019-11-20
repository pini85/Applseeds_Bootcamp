(function(global) {
  global.$C = function(selector) {
    return new ChocolateJS(selector);
  };

  var ChocolateJS = function(selector) {
    this.elements = [];

    if (selector === undefined) {
      return;
    }
    var firstChar = selector.charAt(0);
    var restOfString = selector.slice(1);
    if (firstChar === "#") {
      this.elements.push(document.getElementById(restOfString));
    } else if (firstChar === ".") {
      this.elements = document.getElementsByClassName(restOfString);
    } else {
      this.elements = document.getElementsByTagName(selector);
    }
  };
  // a. Change the method attr(name, value) , If the value parameter is undefined return the attribute value of the element and not set it. (if multiple elements are selected return the first).

  ChocolateJS.prototype.attr = function(name, value) {
    // while (this.elements.length) {
    //   this.elements[0].setAttribute(name, value);
    // }
    //Can also solve it with a while loop more elequently
    for (var i = 0; i < this.elements.length; i++) {
      if (value === undefined) {
        return this.elements[0];
      }

      this.elements[i].setAttribute(name, value);
    }
    return this;
  };
  //Here you need to take the ++ out because the htmlcollection is an array and once you change the name it will get out of that array because the value is different. So it will then it will iterate [1] in the array and skip the [0] one. Without putting ++ it will iterate [0] and each time we change the name the element will leave the array, this iterating over over the next one, until the array of the htmlcolleciton is finished.

  $C(".attr-test").attr("class", "yup");

  ChocolateJS.prototype.html = function(html) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = html;
    }
    return this;
  };

  ChocolateJS.prototype.click = function(clickAction) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener("click", clickAction);
    }
    return this;
  };
  // / b. Add the method addClass(classToAdd),
  // This method should add classToAdd class to the current elements (Do not use classList)
  ChocolateJS.prototype.addClass = function(classToAdd) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].className += " " + classToAdd;
    }
    return this;
  };

  // c. Add the method removeClass(classToRemove),
  // This method should remove classToRemove class to the current elements (Do not use classList)
  ChocolateJS.prototype.removeClass = function(classToRemove) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].className = (" " + this.elements[i].className + " ")
        .split(" " + classToRemove + " ")
        .join("");
    }
    return this;
  };

  // d. Add the method remove(),
  // This method should remove the current elements from the DOM

  ChocolateJS.prototype.remove = function() {
    console.log(this.elements);

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].remove();
      // this.elements[i].className = "";
    }
    return this;
  };
  // $C(".attr-test").remove();
  //ALSO HERE YOU NEED TO TAKE THE ++ OUT

  // e. Add the method hide(),
  // This method should hide the current elements using display none
  ChocolateJS.prototype.hide = function() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.display = "none";
    }
    return this;
  };
  // $C(".attr-test").hide();

  // f. Add the method show(),
  // This method should show the current elements using display block
  ChocolateJS.prototype.show = function() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.display = "block";
    }
  };
  // $C(".attr-test").show();

  // g. Add the method dblClick(clickAction),
  // The method should act similar to the click method but listen to the double click event

  ChocolateJS.prototype.dblClick = function(clickAction) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener("dblclick", clickAction);
    }
    return this;
  };
  // const test = () => {
  //   console.log("double clicked");
  // };
  // $C("#attr-test").dblClick(() => test());

  // Unleash the Ninja: The method should change the display to the original display property of the elements before using the method hide()

  // h. Add 2 more methods that you find helpful
  // const test = () => {
  //
  // };
  // $C(".attr-test")
  //   .attr("class", "hello")
  //   .html("hi")
  //   .click(() => test());
  // $C(".attr-test").removeClass("new-class");
})(window);

// 2. Add the following functionality to the library (All functions must support chaining):
