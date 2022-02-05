var TxtChassis     = $("#TxtChassis"    ).text();
var TxtArduinoMega = $("#TxtArd"        ).text();
var TxtMoteur      = $("#TxtMoteur"     ).text();
var TxtServomoteur = $("#TxtServomoteur").text();
var TxtBatterie    = $("#TxtBatterie"   ).text();
var TxtRPi         = $("#TxtRPi"        ).text();
var TxtRPiCam      = $("#TxtRPiCam"     ).text();
var TxtESP         = $("#TxtESP"        ).text();
var TxtCapteur     = $("#TxtCapteur"        ).text();
var TxtSpace = $("#TxtSpace"        ).text();
var TxtSpace2 = $("#TxtSpace2"        ).text();
var TxtRPiCam2      = $("#TxtRPiCam2").text();
var TxtServoDriver = $("#TxtServoDriver").text();
var TxtMotorShield = $("#TxtMotorShield").text();
var TxtShieldGrove = $("#TxtShieldGroveMega").text();
var srcBoxAnime
var srcBoxAnime2
var src
var deploy = true
var txt
var txt2
var txt3
var name
var timeBox1 = 1000 // temp que met la box principale a se deployer
var timeImg  = 800 // temp que met l'image de la box 1 a apparaître
var timeImgBIP1 = 1450 // temp que que met l'image de la boxInfoPlus1 a apparaitre
var timeImgBIP2 = 800 // temp que que met l'image de la boxInfoPlus2 a apparaitre
var Titre2 = ""
var Titre3 = ""



$('#BoxTxt').css('color','white');
$('#BoxTxt').css('font-weight','Bold');
$('#BoxTxt').css('font-size','16px');
$('#BoxInfoTxt').css('color','white');
$('#BoxInfoTxt').css('font-weight','Bold');
$('#BoxInfoTxt').css('font-size','16px');
$('#BoxInfoTxt2').css('color','white');
$('#BoxInfoTxt2').css('font-weight','Bold');
$('#BoxInfoTxt2').css('font-size','16px');

$(document).ready(function(){
    $("#BChassis").click(function(even){
    	if (deploy == true) {
    		name = "KOOKYE 2WD Smart Tank Platform Metal"
  	        src = 'Img/Chassis.jpg'
  	        
  	        ImgP(); // rend la box principale petite
  	        setTimeout(ImgG, timeBox1) // ouvre la box principale apres un delais
            setTimeout(mp,   timeImg) // determine l'url de l'image une fois la box fermer
            txt = TxtChassis
            
            effect()
            BoxAnimePlusP() // ferme la boxInfoPlus1
            BoxAnimePlus2P() // ferme la boxInfoPlus2
            fantome() // fait disparaitre le titre pour en afficher un autre
            
            closeTxt1()
            closeTxt2()
            setTimeout(closef2,1000)
            closef3()
            closeCaptor()
            AffTxtS()  
            AffTxtS2()
        }
    })

    $("#BArduinoMega").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/Arduino Mega.jpg'
  	        srcBoxAnime = 'Img/groveMegaShield.jpg'
  	        Titre2 = "Shield Grove Mega"
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
            txt = TxtArduinoMega
            txt2 = TxtShieldGrove
  	        effect()
 	        setTimeout(mp2, timeImgBIP1) // determine l'url de l'image une fois la boxInfoPlus1 fermer
  	        BoxAnimePlusG() // ouvre la boxInfoPlus1
  	        BoxAnimePlus2P() // ferme la boxInfoPlus2
  	        name = "Arduino Mega 2560"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(deployTxt1, 300)
            fantome2()
            closef3()
            AffTxtS()
            AffTxtS2()
            setTimeout(effect2,2000)
            closeCaptor()
            
            
  	    }
  	})

    $("#BMoteur").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/Moteur2.jpg'
  	        srcBoxAnime = 'Img/Chassis Motor.jpg'
  	        srcBoxAnime2 = 'Img/shieldMotor.jpg'
  	        Titre3 = "Adafruit Motor Shield V2"
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        txt =TxtMoteur
  	        effect()
  	        setTimeout(mp2, timeImgBIP1)
  	        setTimeout(mp3, timeImgBIP2)
  	        setTimeout
  	        BoxAnimePlusG()
  	        BoxAnimePlus2G()
  	        name = "Encoder DC Motor 9V"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(deployTxt2, 300)
            setTimeout(closef2,1000)
            fantome3()
            
            closeCaptor()
            AffTxtS()
            AffTxtS2()
            //effect2()
            
            txt3 = TxtMotorShield
            setTimeout(effect3,2000)
  	    }
  	})

  	$("#BServomoteur").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/Servomoteur.jpg'
  	        srcBoxAnime2 = 'Img/shieldServomotor.jpg'
  	        Titre3 = "Adafruit PWM/Servo Driver"
  	        txt2 = ""
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
            setTimeout(mp3, timeImgBIP2)
  	        txt =TxtServomoteur
  	        effect()
  	        BoxAnimePlusP()
  	        BoxAnimePlus2G()
  	        name = "Servomoteur HITEC HS-5685MH"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(deployTxt2, 300)
            setTimeout(closef2,1000)
            fantome3()
            closeCaptor()
            AffTxtS()
            AffTxtS2()
            txt3 = TxtServoDriver
            setTimeout(effect3,2000)
  	    }
  	})

    $("#BBatterie").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/Batterie.jpg'
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        txt = TxtBatterie
  	        effect()
  	        BoxAnimePlusP();
  	        BoxAnimePlus2P()
  	        name = "Batterie"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(closef2,1000)
            closef3()
            closeCaptor()
            AffTxtS()
            AffTxtS2()
  	    }
  	})

    $("#BRPi").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/Raspberry pi.jpg'
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        txt = TxtRPi
  	        effect()
  	        BoxAnimePlusP();
  	        BoxAnimePlus2P()
  	        name = "Raspberry pi 3 Model B"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(closef2,1000)
            closef3()
            closeCaptor()
            AffTxtS()
            AffTxtS2()
  	    }
  	})

    $("#BRPiCam").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/RPicamera.jpg'
  	        srcBoxAnime = 'Img/RPi+Cam.jpg'
  	        ImgP()
  	        txt2 = TxtRPiCam2
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        txt = TxtRPiCam
  	        effect()
  	        setTimeout(mp2, timeImgBIP1)
  	        BoxAnimePlusG()
  	        BoxAnimePlus2P()
  	        name = "Caméra Rpi v2"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(deployTxt1, 300)
            setTimeout(closef2,1000)
            closef3()
            closeCaptor()
            AffTxtS()
            AffTxtS2()
            setTimeout(effect2,2000)
  	    }
  	})

    $("#BESP").click(function(even){
    	if (deploy == true) {
  	        src = 'Img/ESP.jpg'
  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        txt = TxtESP
  	        effect()
  	        BoxAnimePlusP();
  	        BoxAnimePlus2P()
  	        name = "Grove ESP8266"
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(closef2,1000)
            closef3()
            closeCaptor()
            AffTxtS()
            AffTxtS2()
        }
    })

    $('#BCapteur').click(function(even){
    	if (deploy == true) {
    		    src = 'Img/Earth.jpg'
  	        srcBoxAnime = 'Img/space2.jpg'
  	        srcBoxAnime2 = 'Img/Mars.jpg'

  	        Titre2 = "Dans l'Espace"
  	        Titre3 = "Sur Mars"
  	        txt = TxtCapteur
            txt2 = TxtSpace
            txt3 = TxtSpace2
  	        name = "Sur Terre"

  	        ImgP()
            setTimeout(mp,   timeImg)
            setTimeout(ImgG, timeBox1)
  	        
  	        effect()
  	        setTimeout(mp2, timeImgBIP1)
  	        setTimeout(mp3, timeImgBIP2)
  	        
  	        BoxAnimePlusG()
  	        BoxAnimePlus2G()
            fantome();
            closeTxt1()
            closeTxt2()
            setTimeout(deployTxt2, 300)
            setTimeout(deployTxt1, 300)
            //setTimeout(closef2,1000)
            fantome2()
            fantome3()
            AffTxtS()
            AffTxtS2()
            deployCaptor()
            setTimeout(effect2,2000)
            setTimeout(effect3,2000)

    	}
    })

    $('#BCommande').click(function(even){
    	if (deploy == true) {
    		AffTxtS()
    		AffTxtS2()
    		commandClose()
    	}
    })

})
function commandClose(){
	src = ''
  	srcBoxAnime = ''
  	srcBoxAnime2 = ''
    Titre2 = ""
    Titre3 = ""
  	txt = ""
  	name = ""
  	ImgP()
  	effect()
  	effect2()
  	setTimeout(mp2, timeImgBIP1)
  	setTimeout(mp3, timeImgBIP2)
  	closeCaptor()
  	BoxAnimePlusP()
  	BoxAnimePlus2P()
  	fantome();
    closeTxt1()
    closeTxt2()
    closef2()
    closef3()
    setTimeout(Hide,1000)
    setTimeout(deployInterface, 2000)
    setTimeout(CamG,3000)

}

function deployInterface(){
	$('#BoxImgTxt').animate({height : '700px',width : '1640px'})
	$('#BoxImg').delay(1000).animate({height : '607px',width : '810px'})
	$('#BoxTxt').animate({height : '50px',width : '600px'})
}
function CamG(){

	$('#Cam').show().animate({height : '607px',width : '810px'})
}


///////////// Affichage des textes ///////////////////
function effect(){
	$('#BoxTxt').animate({'backgroundColor':'white'},500)
	.animate({'backgroundColor':'black'},500)
	setTimeout(AffTxt, 450)}
function AffTxt(){$('#BoxTxt').text(txt)}
//////////////////Affichage des images /////////////////
function mp(){$('#Img').attr('src',src);}
function mp2(){$('#ImgInfoPlus').attr('src',srcBoxAnime);}
function mp3(){$('#ImgInfoPlus2').attr('src',srcBoxAnime2)}


//////////// Animation 1er Box ////////////////////////
function BoxAnimePlusG(){
	$('#ImgInfoPlus').stop().delay(1000).animate({height : '10px',width : '10px'})
	.animate({height : '200px',width : '200px'})
	.animate({height : '180px', width : '180px'})
	.animate({height : '286px', width : '286px'})
	}
function BoxAnimePlus2G(){
	$('#ImgInfoPlus2').stop().delay(0).animate({height : '10px',width : '10px'},1000)
	.animate({height : '200px',width : '200px'})
	.animate({height : '180px', width : '180px'})
	.animate({height : '286px', width : '286px'})
	}
function BoxAnimePlusP(){$('#ImgInfoPlus').stop().animate({height : '10px',width : '10px'})}
function BoxAnimePlus2P(){$('#ImgInfoPlus2').stop().animate({height : '10px',width : '10px'})}

//////////// Animation Box Image ///////////////////////
function ImgP(){
	deploy = false
	$('#Img').stop().animate({height : '2px'},200)
	.animate({width : '2px'});}
function ImgG(){
	deploy = true
	$('#Img').stop().animate({height : '286px'},200)
	.animate({width : '290px'});}

////////////////// Apparition Du titre des objets //////////////
function fantome(){
	$('#name').fadeTo("slow",0.0).fadeTo("slow",1)
	setTimeout(fanttxt, 500)}
function fanttxt(){$('#name').text(name)}

function deployTxt1(){
	$('#BoxInfoTxt').stop().delay(2000).animate({height : '120px',width : '250px'})
	//.animate({height : '100px',width : '150px'})
	//.animate({height : '120px',width : '250px'})
}
function closeTxt1(){$('#BoxInfoTxt').stop().animate({height : '10px',width : '10px'})}
function deployTxt2(){
	$('#BoxInfoTxt2').stop().delay(2000).animate({height : '120px',width : '250px'})
	/*.animate({height : '100px',width : '150px'})
	.animate({height : '120px',width : '250px'})*/
}
function closeTxt2(){$('#BoxInfoTxt2').stop().animate({height : '10px',width : '10px'})}


function fantome2(){
	$('#Titre2').animate({width : '300px'})
	.fadeTo("slow",0.0).fadeTo("slow",1)
	setTimeout(affTxt2, 1000)}
function affTxt2(){$('#Titre2').text(Titre2)}
function closef2(){$('#Titre2').fadeTo("slow",0.0).animate({width : '10px'})}

function fantome3(){
	$('#Titre3').animate({width : '300px'})
	.fadeTo("slow",0.0).fadeTo("slow",1)
	setTimeout(affTxt3, 1000)}
function affTxt3(){$('#Titre3').text(Titre3)}
function closef3(){$('#Titre3').fadeTo("slow",0.0).animate({width : '10px'})}


function effect2(){
	$('#BoxInfoTxt').animate({'backgroundColor':'white'},500)
	.animate({'backgroundColor':'black'},500)
	setTimeout(AffTxtR, 1300)}
function AffTxtR(){$('#BoxInfoTxt').text(txt2)}
function AffTxtS(){$('#BoxInfoTxt').text("")}

function effect3(){
	$('#BoxInfoTxt2').animate({'backgroundColor':'white'},500)
	.animate({'backgroundColor':'black'},500)
	setTimeout(AffTxtR2, 1300)}
function AffTxtR2(){$('#BoxInfoTxt2').text(txt3)}
function AffTxtS2(){$('#BoxInfoTxt2').text("")}

function Hide(){
	$('#Img').hide()
	$('#BoxObject').hide(500)
	$('#BoxImgInfo').hide(500)
	$('#BoxImgInfo2').hide(500)
	$('#CapteurSerie').hide(500)
	$('#name').hide(500)
}


function deployCaptor(){
	$('.capteur').delay(1000).animate({width : '120px',height : '120px'})
	setTimeout(colorw,2000)
	$('#capteur1').attr('src','Img/Capteurs/Barometre.jpg');
    $('#capteur2').attr('src','Img/Capteurs/uv.jpg');
    $('#capteur3').attr('src','Img/Capteurs/LightSensor.jpg');
    $('#capteur4').attr('src','Img/Capteurs/IMU.jpg');
}
function closeCaptor(){$('.capteur').animate({width : '5px',height : '5px'}),colorb()}
function colorw(){$('.TCapteur').css('color','white')}
function colorb(){$('.TCapteur').css('color','black')}






$('#Img').attr('src','Img/Rover.jpg');