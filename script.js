// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$( document ).ready(function() {
// salvo l'indirizzo della funzione da richiamare in una variabile
var url_server = "https://flynn.boolean.careers/exercises/api/random/int";
$(".general .cubo").click(function() {
  // salvo in una variabile il quadrato selezionato
  var selezione = $(this);

 // ajax per richiamare funzione numeri random da server
  $.ajax(
         {
            url : url_server,
            method: "GET",
            success: function(data){
               var numServer = data.response;
               console.log("num server", numServer);

                  //confrontiamo i 2 numeri per aggiungere sfondo quadrato selezionato
                  if(numServer > 5){
                     $(selezione).addClass("maxCinque").text(numServer);
                  } else if (numServer <= 5){
                     $(selezione).addClass("minCinque").text(numServer);
                  }
            },
            error: function(richiesta,stato,errore){
               console.log("C'è un problema con il server");
            }
         }
      );
  });
});
