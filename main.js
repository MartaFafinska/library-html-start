window.onload = function() {
    $("button").on("click",function(){
        $.ajax({
            type:"GET",
            url:"http://localhost:44845/api/books",
            success:function(data){
                $("ul").append($("<li>").text(data[0].bookTitle));
                $("ul").append($("<li>").text(data[1].bookTitle));
            },
            cache: false
        });
    });
}