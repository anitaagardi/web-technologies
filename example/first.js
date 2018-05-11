

$(document).ready(function () {
    counter=0;
    $("#forest").click(function () {
        $(this).animate({ height: "300px", width: "300px" });
    });
    $("#forest").dblclick(function () {
        $(this).animate({ height: "100px", width: "100px" });
    });
    $("#mouseEnter").mouseenter(function(){
        $(this).html("This is the example");
    });
    $("#mouseEnter").mouseleave(function(){
        $(this).html("Main site");
    });
    $("#pictureHide").click(function(){
        
        if(counter%2==0){
        $("#forest").hide();
        }else{
            $("#forest").show();
        }

        counter++;
    })
  
    $("#validate").click(function () {
        var personFirstName=$("#personFirstName").val();
        var personLastName=$("#personLastName").val();
        var personEmail=$("#personEmail").val();
        var personAge=$("#personAge").val();
        var hobbies=$("#hobbies").val();
        $("#personFirstName").css('border','1px solid #ccc');
        $("#personLastName").css('border','1px solid #ccc');
        $("#personAge").css('border','1px solid #ccc');
        if(personFirstName==""){
            alert("Person first name is empty");
            $("#personFirstName").css('border','2px solid #ff0000');
            return;
        }
        if(personLastName==""){
            alert("Person last name is empty");
            $("#personLastName").css('border','2px solid #ff0000');
            return;
        }
        if(personAge<0){
            alert("Person age is invalid");
            $("#personAge").css('border','2px solid #ff0000');
            return;
        }
       
    });
   
});