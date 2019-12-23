const  pizza = {};

pizza.toppings=["onions", "olives","mushrooms"]
pizza.pizza = $("#pizza");


pizza.start = () =>{
    pizza.pizza.hide();
    pizza.bindOptions()
    pizza.createToppingList()
    pizza.new()
};

pizza.createToppingList = () =>{
    console.log("hi");
const toppingMenu = $("#toppings");
for (const topping of pizza.toppings){
    const li = $('<li/>');
    li.attr("class", "cover-bg");
    li.attr("id", topping);
    li.text (topping);
    toppingMenu.append(li);

    li.click((event) =>{
        for (const topping of pizza.toppings){
            pizza.currentElement = $("#"+topping)
            currentElement = remove("selected")
        const allToppingsButtons = $("cover-bg")
        allToppingsButtons.removeClass("cover-bg")
        pizza.selectedTopping = topping
        $(event.target).addClass("selected")
    })

}
}
pizza.new = () =>{
    pizza.pizzaName = prompt("please name the pizza")
    pizza.pizzaTitleElement = $("#pizza-title")
    pizza.pizzaTitleElement.text (pizza.pizzaName)
    pizza.pizza.show()
}

pizza.save = () =>{
    
}

pizza.load = () =>{
    
}

pizza.bindOptions = () =>{
    const newBtn = $('#new');
    const saveBtn = $('#save');
    const loadBtn = $('#load');
    newBtn.click(pizza.new);
    saveBtn.click(pizza.save);
    loadBtn.click(pizza.load);
}

pizza.addToppings = () =>{
    const newTopping = $("<img/>");
    newTopping.attr ("src", "./pizza.png")
    newTopping.class ("topping  ")
    pizza.pizza.

}
pizza.start();







