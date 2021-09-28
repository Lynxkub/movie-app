let count = 0

$("form").on("submit", function(e){
    e.preventDefault();
   
   let movie=$("#movieName").val();
   let rating=$("#rating").val();
    $("ul").append(`<li>${movie} - ${rating}</li>`)
    $("li").eq(`${count}`).append("<button>Remove From List</button>")
    $("button").addClass("remove");
    $("input").val("")
   count ++
})


$("ul").on("click", "button", function(e){
    e.target.parentElement.remove()
})



