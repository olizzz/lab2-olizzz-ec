$(document).ready(function() {
$.getJSON("data.json", function(data) {
    var text_string='';
    text_string+='<div class = "intro"><h1>'+data.title+'</h1></div>';

    for (i = 0; i < data.questions.length; i++) { 
        text_string += "<div class = 'question'><h2>";
        text_string += data.questions[i].question_name;
        text_string += "</h2></div><div class = 'answers'>";
        for (j = 0; j < data.questions[i].answers.length; j++){
            var name = 'q' + Number(i+1);
            var value = data.questions[i].answers[j].outcome;
            var id = 'q' + Number(i+1) +'a'+Number(j+1);
            text_string+= "<input type='radio' id ="+id+ " name ="+name+" value="+value+"/>";
            text_string+="<label for="+id+'>';
            text_string+='<div class= image-container>';
            text_string+='<img src="'+data.questions[i].answers[j].img_url+'"/></div>';
            text_string+='<div class = answer>'+data.questions[i].answers[j].text+'</div></label>';
        }
        text_string+='</div>';
    }
    text_string+='<div class = "done-button-area"><button id = "done-button">What am I?</button></div>';

    var outcome_keys =Object.keys(data.outcomes);
    for (i = 0; i < outcome_keys.length; i++) {
        var result_id = 'result'+Number(i+1);
        var outcome_key = outcome_keys[i];
        text_string+='<div class = result id ='+result_id+'>';
        text_string+='<h3>'+ data.outcomes[outcome_key].text+'</h3></div>'; 
    }
    console.log(text_string)
    $('#main').html(text_string);
})});


//https://www.w3schools.com/howto/howto_css_modals.asp

$('.close').click(function() {
    $(this).parents('.result,#error-modal').hide();
});

$(document).ready(function (){ 
$('#done-button').on('click',function(e) {
    // if has not answered every question
    e.stopPropagation();
    var check = true;
    $("input:radio").each(function(){
        var name = $(this).attr("name");
        if(!$("input:radio[name="+name+"]:checked").is(":checked")){
            check = false;
        }
    });
    //Source:https://www.codexworld.com/how-to/check-if-radio-button-in-group-checked-jquery/
    if(!check){
        $('#error-modal').show();
    }
    else{
        $('#error-modal').hide();

        // gather all checked radio-button values
         var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
      }).toArray();

        var result1 = $('#result1')
        var result2 = $('#result2')
        var result3 = $('#result3')
        var result4 = $('#result4')
        var result5 = $('#result5')
        var result6 = $('#result6')

        var map = {};
        var mostFrequentElement = choices[0];
        //find most frequent 
        for(var i = 0; i<choices.length; i++){
            if(!map[choices[i]]){
                 map[choices[i]]=1;
            }
            else{
                ++map[choices[i]];
                if(map[choices[i]]>map[mostFrequentElement]){
                    mostFrequentElement = choices[i];
                }
            }
        }
        if (mostFrequentElement =='a1'){
            result1.show()
            $('#result1').siblings('.result').not('#result1').hide()
        }
        if (mostFrequentElement =='a2'){
            result2.show()
            $('#result2').siblings('.result').not('#result2').hide()
        }
        if (mostFrequentElement =='a3'){
            result3.show()
            $('#result3').siblings('.result').not('#result3').hide()
        }
        if (mostFrequentElement =='a4'){
            result4.show()
            $('#result4').siblings('.result').not('#result4').hide()
        }
        if (mostFrequentElement =='a5'){
            result5.show()
            $('#result5').siblings('.result').not('#result5').hide()
        }
        if (mostFrequentElement =='a6'){
            result6.show()
            $('#result6').siblings('.result').not('#result6').hide()
        }
    }
    

})});

$('label').click(function(){
    // Make all images (except this) transparent
    $(this).siblings().not(this).find('img').stop().animate({opacity: 0.6}, 300);
    $(this).siblings().not(this).find('.text-answer').stop().animate({opacity: 0.6}, 300);
    // Make this opaque
    $(this).find('img').stop().animate({opacity: 1.0}, 300);
    $(this).find('.text-answer').stop().animate({opacity: 1.0}, 300);
});

/*https://stackoverflow.com/questions/5568398/change-the-opacity-of-all-elements-except-the-one-selected*/
