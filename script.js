let phoneValue ;
let emailValue ;
let nationalValue ;
let skillNumber = 0 ;
let veriftNumber = 0 ;
let verifySec1 ;
let verifySec2 ;
let verifySec3 ;
let verifySec4 ;


$(function(){
    $("#accordion").accordion();
});

function verify_sec1 () {
    $('.sec1H').removeClass('back-gray');
    $('.sec1H').addClass('back-green');
    $('.sec1H').addClass('white');
    return true ; 
}

$('.item1 button').click(()=>{ 
    phoneValue = $('.item1 input').val();
    if(phoneValue){
        veriftNumber++;
        alert('Confimed');
        $('.item1 button').removeClass('back-red');
        $('.item1 button').addClass('back-green');
    }else {
        alert('Enter Phone Number');
    }
});

$('.item2 button').click(()=>{ 
    emailValue = $('.item2 input').val();
    if(emailValue){
        veriftNumber++;
        alert('Confimed');
        $('.item2 button').removeClass('back-red');
        $('.item2 button').addClass('back-green');
    }else {
        alert('Enter Email Address');
    }
});

$('.item3 button').click(()=>{
    nationalValue = $('.item3 input').val(); 
    if(nationalValue){
        veriftNumber++;
        alert('Confimed');
        $('.item3 button').removeClass('back-red');
        $('.item3 button').addClass('back-green');
    }else {
        alert('Enter National Id');
    }
});

function verify_sec2(){
    if(phoneValue && emailValue && nationalValue){
        $('.sec2H').removeClass('back-gray');
        $('.sec2H').addClass('back-green');
        $('.sec2H').addClass('white');
        return true ;
    }else {
        return false ;
    }
}

function verify_sec3 () {
    $('.sec3H').removeClass('back-gray');
    $('.sec3H').addClass('back-green');
    $('.sec3H').addClass('white');
    return true ; 
}

$('.addBtn').click(()=> { 
    if($('.item input').val()){
        skillNumber++;
        if(skillNumber <= 10){
        const p = document.createElement('p');
        $(p).addClass('d-in-block white back-brown radius-25 p-10 mr-5 mt-10');
        $(p).text($('.item input').val());
        const skillDiv = document.querySelector('.result');
        skillDiv.append(p);
        verifySec4 = true ;
        $('.item input').val("");
        }else {
            alert('Just Add 10 Skill');
        }
    }else {
        alert("Enter Skill's")
    }
});

$('.sec1H').click(()=>{ 
    if(veriftNumber == 3){
        verify_sec2();
    }
    
    if($('.sec1 .one').val() && $('.sec1 .two').val() && $('.sec1 .three').val()){
        verify_sec1();
    }
    
    if($('.sec3 .one').val() && $('.sec3 .two').val() && $('.sec3 .three').val() && $('.sec3 .four').val()){
        verify_sec3();
    }
});

$('.sec2H').click(()=>{ 
    if(veriftNumber == 3){
        verify_sec2();
    }
    
    if($('.sec1 .one').val() && $('.sec1 .two').val() && $('.sec1 .three').val()){
        verify_sec1();
    }
    
    if($('.sec3 .one').val() && $('.sec3 .two').val() && $('.sec3 .three').val() && $('.sec3 .four').val()){
        verify_sec3();
    }
});

$('.sec3H').click(()=>{ 
    if(veriftNumber == 3){
        verify_sec2();
    }
    
    if($('.sec1 .one').val() && $('.sec1 .two').val() && $('.sec1 .three').val()){
        verify_sec1();
    }
    
    if($('.sec3 .one').val() && $('.sec3 .two').val() && $('.sec3 .three').val() && $('.sec3 .four').val()){
        verify_sec3();
    }
});

$('.sec4H').click(()=>{ 
    if(veriftNumber == 3){
        verify_sec2();
    }
    
    if($('.sec1 .one').val() && $('.sec1 .two').val() && $('.sec1 .three').val()){
        verify_sec1();
    }
    
    if($('.sec3 .one').val() && $('.sec3 .two').val() && $('.sec3 .three').val() && $('.sec3 .four').val()){
        verify_sec3();
    }
});

$('.submit').click(()=> { 
    if(verifySec1 && verifySec2 && verifySec3 && verifySec4){
        $('.sec4H').removeClass("back-gray");
        $('.sec4H').addClass('back-green');
        $('.sec4H').addClass('white');
        alert('You Are Winner Form Send To Admin :)')
    }else {
        alert('Please Fill The Form')
    }
});

window.addEventListener('load' , ()=>{
    if(window.innerWidth < 900){
        $(".main").removeClass('w--50');
        $('.main').addClass("w--100");
        $('.main').addClass("p-15");
    }
    
    if(window.innerWidth < 450){
        $('.logo2').hide();
        $('a').css('font-size' , "15");
    }
    
})
