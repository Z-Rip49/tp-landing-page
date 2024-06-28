$(document).ready(function(){
    let isX= false
    $(".cuadrado").on("click", function(e){
       
        let id=$(e.target).prop("id")
        if($("#"+ id).text() != "X" && $("#"+ id).text() != "O"){
            console.log(id)
            if(isX){
                $("#"+ id).html("X")
            }else{
                $("#"+ id).html("O")    
            }
            isX=!isX
        }
    })
})

