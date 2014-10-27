$(function(){                       //document ready block. Prevents JS from executing before the page fully loads.
    var button = $("button");
    button.on("click",function(){
        console.log("button was just clicked")
        var newItem = $("input").val();
        if (newItem !== ""){
        var newLi = $("<li>").text(newItem);
        $("ul").append(newLi);
        }
    })
});
