// skrypt usuwajacy element z listy

var list = document.getElementsByClassName('foodList')[0];
if(list.addEventListener){  // sprawdzenie czy nałuchowacz jest obsługiwany w przeglądarce
   list.addEventListener('click',function(e){
      deleteItem(e);
   })
}
else{
   list.attachEvent('onclick',function(e){
      deleteItem(e);
   })
}

//funkcja zwracająca odniesienie do elem w ktorym nastapiło zdarzenie
function getEventTarget(e){
   if(!e){
      e = window.event;
   }
   else{
      var target = e.target || e.srcElement;
      return target;
   }
}

//funcja usuwajaca z listy zadanie
function deleteItem(e){
   if(e.stopPropagation){         // zatrzymanie domyślnego zachowanie <a>
      e.stopPropagation();
   }
   else{
      e.returnValue = false;
   }
   var target =  getEventTarget(e);   // pobranie <a> - zwroci je funkcja getEventTarget
   var listItem = target.parentNode;   //pobranie <li>
   var list = listItem.parentNode;     //pobranie <ul>
   list.removeChild(listItem);
}