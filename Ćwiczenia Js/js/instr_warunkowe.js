//  zadania ze strony:   https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#h_one

var div = document.getElementById('exercise');



// Zad 1. Napisz program JavaScript, który zaakceptuje dwie liczby całkowite i wyświetli większą. 

// function getNumbers (){                     //pobranie liczb
//     var number1 = prompt("prosze podac pierwsza liczbe");
//     while ( (number1 === '') || (isNaN(number1))) {
//         number1 = prompt("Nie podano żadnej wartosci lub podana wartosć nie jest liczba, prosze podac liczbe");
//     }
//     var number2 = prompt("prosze podac druga liczbe");
//     while ( (number2 === '') || (isNaN(number2))) {
//         number2 = prompt("Nie podano żadnej wartosci lub podana wartosć nie jest liczba, prosze podac liczbe");
//     }
//     number1 = parseInt(number1, 10);
//     number2 = parseInt(number2, 10);
    
//     return [number1, number2];  //zwracamy obie liczby 
// }

// function compareNumbers( nb1, nb2 ) {     //porównanie liczb
//     if ( nb1 > nb2 ) 
//     {
//         div.innerHTML = "wiekszą z podanych liczb jest:" + nb1;
//     }
//     else if ( nb1 < nb2 )
//     {
//         div.innerHTML = "wiekszą z podanych liczb jest:" + nb2;
//     }
//     else
//         div.innerHTML = "obie liczby sa sobie równe i wynosza:" + nb1;
// }

// [number1, number2] = getNumbers();  //poniewaz te zmienne byly juz ale tylko lokalnie, w ciele getNumbers dlatego tworzymy tutaj teraz globalnie number1 i number2
// compareNumbers(number1, number2);  // odpalamy te porownanie dla naszych 2 liczb

//END 1.




    // --------------------------------------------------------------------------------------------------------------------------------



// Zad 3. Napisz warunkową instrukcję JavaScript, aby posortować trzy liczby. Wyświetl pole alertu, aby wyświetlić wynik.

//w tym zadaniu zakładam ze podano liczby, tego typu sprawdzenie wykonano w zad 1
// var number1, number2, number3, sortedNumbers;

//     number1 = parseInt(prompt("prosze podac pierwsza liczbe"), 10);
//     number2 = parseInt(prompt("prosze podac drugą liczbe"), 10);
//     number3 = parseInt(prompt("prosze podac trzecia liczbe"), 10);

// function sortNumbers(){
//     var tableOfNumbers = [number1, number2, number3];

//     if( number1 > number2){
//         if( number1 > number3) {
//             tableOfNumbers[0] = number1;
//             if ( number2 > number3) {
//                 tableOfNumbers[1] = number2;
//                 tableOfNumbers[2] = number3;
//             }else{
//                     tableOfNumberrs[1] = number3;
//                     tableOfNumbes[2] = number2;  
//                 }
//         }else{
//             tableOfNumbers[0] = number3;
//             tableOfNumbers[1] = number1;
//             tableOfNumbers[2] = number2;
//             } 
//     }else{
//         if ( number1 > number3 ){
//             tableOfNumbers[0] = number2;
//             tableOfNumbers[1] = number1;
//             tableOfNumbers[2] = number3;           
//             }
//         else{
//             if( number2 > number3){
//                 tableOfNumbers[0] = number2;
//                 tableOfNumbers[1] = number3;
//                 tableOfNumbers[2] = number1;
//             }else{
//                 tableOfNumbers[0] = number3;
//                 tableOfNumbers[1] = number2;
//                 tableOfNumbers[2] = number1;
//                 }
//             }
//         }
//     return tableOfNumbers;  
// }

// sortedNumbers = sortNumbers(); 

// div.innerHTML = "liczby w kolejnosci od najwiekszej do najmniejszej: " + sortedNumbers[0] + " ," +sortedNumbers[1] + " i "+ sortedNumbers[2] + " ";

// END 3.


// Zad 3a. SORTOWANIE TABLIC

//zamiana WARTŚCI NA LICZBE  (nawet true na 1 zamieni)
// var number1, number2, number3,tableOfNumbers,sortedNumbers;

//     number1 = Number(prompt("prosze podac pierwsza liczbe"));
//     number2 = Number(prompt("prosze podac drugą liczbe"));
//     number3 = Number(prompt("prosze podac trzecia liczbe"));
//     tableOfNumbers = [number1, number2, number3];

// function sortNumbers(){    //sortowanie rosnące
//     var ascendingSort = tableOfNumbers.sort(function(a,b){return a-b});
//     //lub alternatywnie :
//     // var ascendingSort = tableOfNumbers.sort();
//     var descendingSort = tableOfNumbers.sort(function(a,b){return b-a});
//     //lub alternatywnie :
//     // var descendingSort = tableOfNumbers.reverse();
    
//     return     {ascendingSort: ascendingSort,
//                 descendingSort: descendingSort};  
// }
// //sortownie obiektow
// var persons = [{name: "John"}, {name: "Anna"}, {name: "Tom"}];
// f = function (x, y) {   //sortowanie malejaco
//     if (x.name < y.name) return 1;   //lub 1 dla rosnacego sortowania
//     if (x.name > y.name) return -1;   //lub -1 dla rosnacego sortowania
//     return 0;
// };
// persons.sort(f);
// sortedNumbers = sortNumbers(); 
// div.innerHTML = "liczby w kolejnosci od najwiekszej do najmniejszej: " + sortedNumbers.ascendingSort 
// + " <br> liczby w kolejnosci od najmniejszej do najwiekszej: " + sortedNumbers.descendingSort + 
// "<br> posortowane imiona to: " + persons[0].name + " " + persons[1].name + " " + persons[2].name;

//END 3a.




// --------------------------------------------------------------------------------------------------------------------------------



// 4.Napisz warunkową instrukcję JavaScript, aby znaleźć największą z pięciu liczb. Wyświetl pole alertu, aby wyświetlić wynik.
// var num1, num2, num3, num4, num5, tableOfNumbers;

//     num1 = Number(prompt("prosze podac pierwsza liczbe"));
//     num2 = Number(prompt("prosze podac drugą liczbe"));
//     num3 = Number(prompt("prosze podac trzecia liczbe"));
//     num4 = Number(prompt("prosze podac czwarta liczbe"));
//     num5 = Number(prompt("prosze podac piata liczbe"));
//     tableOfNumbers = [num1, num2, num3, num4, num5];
//     var inputTableCopy = tableOfNumbers.slice();
//     // tableOfNumbers.sort(function(a,b){return b-a})

//     // div.innerHTML = "podano liczby: " + inputTableCopy.join(', ') +   
//     // "<br> nawieksza ze wskazanych liczb to oczywiscie: " + tableOfNumbers[0];
//     //lub bez inputTableCopy
//     // div.innerHTML = "podano liczby: " + tableOfNumbers.join(', ') +   
//     // "<br> nawieksza ze wskazanych liczb to oczywiscie: " + tableOfNumbers.sort(function(a,b){return b-a})[0];
    
//     //kolejna wersja znalezienia max bez sortowania
    
    // function maxInTable(table){
    //     var max = table[0]
    //     for(var element of table){    
    //         max = (element > max) ? element : max; 
    //     }
    //     return max;
    // }
  
//     div.innerHTML = "podano liczby: " + inputTableCopy.join(', ') +   
//     "<br> nawieksza ze wskazanych liczb to oczywiscie: " + maxInTable(tableOfNumbers);

//END 4.



// --------------------------------------------------------------------------------------------------------------------------------



// 5.Napisz pętlę JavaScript dla iteracji od 0 do 15. Dla każdej iteracji sprawdza ona, czy aktualny numer jest nieparzysty czy parzysty i wyświetla komunikat na ekranie.

// function checkIsEven(el){
//     return (el%2 == 0) ? "liczba parzysta" : "liczba nieparzysta"
// }
// function displayNumbers(quantity){
//     for (var i=0; i<(quantity+1); i++){
//         div.innerHTML += "liczba " + i + " to " + checkIsEven(i) + "<br>";  
//     }
// }
// displayNumbers(15);

//END 5.




// --------------------------------------------------------------------------------------------------------------------------------



// 6. Napisz program JavaScript, który obliczyć, ŚREDNIA Z OCEN następujących uczniów 
//zakladam ze otrzymujemy liste ocen:
// var studentList = {
//                     student1 : [3,3,5,5,4],
//                     student2 : [5,4,2,4,3],
//                     student3 : [5,4,6,4,2],
//                     student4 : [2,3,1,1,1]
//                     };

// function average(stListObj){

//     var grListObj = Object.values(stListObj);   // tworzymy tablice zawierająca swoich polach wartości obiektu, czyli tutaj beda tablice w tablicy: [[3,3,5,5,4],[5,4,2,4,3]]
//     var averagesTable = [];  //tworzymy zmienna , tablice, do której włożymy obliczone średnie studentów z obiektu studentist
    
//     for (var j=0; j<grListObj.length; j++){    //iterujemy po ilości studentów
        
//         var sum = 0;
//         for( var i=0; i<grListObj[j].length ; i++){  //iterujemy po ocenach indywidualnego studenta
//             sum += grListObj[j][i];
//         }
//         averagesTable[j] = sum / grListObj[j].length;     
//     }

//     return averagesTable;   //zwracamy tablice ze srednimi
// }

// function whatGrade(average) {
//     var grade;
//     if (average < 1.75){
//         grade = "ndst!";   
//     }else   
//         if ((average >= 1.75) && (average < 2)){
//             grade = "mrn-";   
//         }else
//             if ((average >= 2) && (average < 2.25)){
//                 grade = "mrn";   
//             }else   
//                 if ((average >= 2.25) && (average < 2.75)){
//                     grade = "mrn+";   
//                 }else
//                     if ((average >= 2.75) && (average < 3)){
//                         grade = "dst-";   
//                     }else   
//                         if ((average >= 3) && (average < 3.25)){
//                             grade = "dst";   
//                         }else
//                             if ((average >= 3.25) && (average < 3.75)){
//                                 grade = "dst+";   
//                             }else     
//                                 if ((average >= 3.75) && (average < 4)){
//                                     grade = "db-";   
//                                 }else   
//                                     if ((average >= 4) && (average <= 4.25)){
//                                         grade = "db"; 
//                                     }else                 
//                                         if ((average >= 4.25) && (average < 4.75)){
//                                             grade = "db+";   
//                                         }else     
//                                             if ((average >= 4.75) && (average < 5)){
//                                                 grade = "bdb-";   
//                                             }else   
//                                                 if ((average >= 5) && (average <= 5.25)){
//                                                     grade = "bdb";   
//                                                 }else  
//                                                     if ((average >= 5.25) && (average <= 5.5)){
//                                                         grade = "bdb+";   
//                                                     }else   
//                                                         if ((average >= 5.5) && (average <= 6)){
//                                                             grade = "cel";   
//                                                     }
//     return grade;
// }

// var average = average(studentList);  //otrzymujemy tablice ze srednimi [4, 3.6 itd]
// var students = Object.keys(studentList);  // otrzymujemy tablice ze studentami ['student1','student2' itd]
// for(var i=0; i<average.length ;i++){
//     div.innerHTML += students[i] + ' ma srednia ocen rowna: ' + average[i] + ' , co daje mu ocene: ' + whatGrade(average[i]) + '<br>';
// }



//WERSJA 2 -  bez obieków

//zakladam ze otrzymujemy liste ocen:
// var student1 = [3,3,5,5,4],
//     student2 = [5,4,2,4,3],
//     student3 = [5,4,6,4,2],
//     student4 = [2,4,5,5,3],
//     average;

// function average (student){
//     var sum = 0;
//     for(var element of student){
//         sum += element;
//         }
//     return (sum/student.length);
// }
 
// function whatGrade(average) {
//     var grade;
//     if (average < 1.75){
//         grade = "ndst!";   
//     }else   
//         if ((average >= 1.75) && (average < 2)){
//             grade = "mrn-";   
//         }else
//             if ((average >= 2) && (average < 2.25)){
//                 grade = "mrn";   
//             }else   
//                 if ((average >= 2.25) && (average < 2.75)){
//                     grade = "mrn+";   
//                 }else
//                     if ((average >= 2.75) && (average < 3)){
//                         grade = "dst-";   
//                     }else   
//                         if ((average >= 3) && (average < 3.25)){
//                             grade = "dst";   
//                         }else
//                             if ((average >= 3.25) && (average < 3.75)){
//                                 grade = "dst+";   
//                             }else     
//                                 if ((average >= 3.75) && (average < 4)){
//                                     grade = "db-";   
//                                 }else   
//                                     if ((average >= 4) && (average <= 4.25)){
//                                         grade = "db"; 
//                                     }else                 
//                                         if ((average >= 4.25) && (average < 4.75)){
//                                             grade = "db+";   
//                                         }else     
//                                             if ((average >= 4.75) && (average < 5)){
//                                                 grade = "bdb-";   
//                                             }else   
//                                                 if ((average >= 5) && (average <= 5.25)){
//                                                     grade = "bdb";   
//                                                 }else  
//                                                     if ((average >= 5.25) && (average <= 5.5)){
//                                                         grade = "bdb+";   
//                                                     }else   
//                                                         if ((average >= 5.5) && (average <= 6)){
//                                                             grade = "cel";   
//                                                     }
//     return grade;
// }

// average = average(student1);
// var grade = whatGrade(average);
// console.log(average);
// console.log(grade);

//END 6.




// --------------------------------------------------------------------------------------------------------------------------------



// // 7. Napisz program JavaScript, który iteruje liczby całkowite od 1 do 100. Ale dla wielokrotności trzech wydrukuj "Fizz" zamiast liczby i dla wielokrotności pięciu wydrukuj "Buzz". Dla liczb, które są wielokrotnościami trzech i pięciu, wypisz "FizzBuzz"
// function wypisz(){
// for(var i=1; i<101 ;i++){
//     if(i%3 == 0){
//         if(i%5 == 0){
//             div.innerHTML += " FizzBuzz , ";
//         }else
//             div.innerHTML += " Fizz , ";
//     }else if(i%5 == 0){
//         div.innerHTML += " Buzz , ";
//         }else
//         div.innerHTML += i + ' , ';
// }
//         return div.innerHTML;
// }
// wypisz();

// END 7.




// --------------------------------------------------------------------------------------------------------------------------------



// 9.Napisz program w języku JavaScript, aby znaleźć liczby armstronga 3-cyfrowe. Uwaga: liczba trzech cyfr Armstronga jest liczbą całkowitą, tak że suma sześcianów cyfr jest równa liczbie. Na przykład 371 to liczba Armstronga od 3 ** 3 + 7 ** 3 + 1 ** 3 = 371. 

// for ( var a = 1; a<10; a++){
//     for ( var b = 0; b<10; b++){
//         for ( var c = 0; c<10; c++){
//             if ( ( Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3)) == (a*100 + b*10 + c) ){
//                 console.log( (a*100 + b*10 + c) + ' jest liczba Armstronga')
//             }
//         }
//     }
// }

//END 9.




// --------------------------------------------------------------------------------------------------------------------------------



// 10. Napisz program JavaScript, aby skonstruować następujący wzorzec, używając zagnieżdżonej pętli for.

// *   
// * *   
// * * *   
// * * * *   
// * * * * *
// function createStarsTriangle(number) {
//     var star = '';
//     for(var i=1; i<=number; i++) {
//         for( var j=1; j<=i; j++) {
//         star += '*'
//         }
//         console.log(star);
//         star = '';
//     }
// }
// createStarsTriangle(3);

//sposob ze string.repeat()

// var str = "* ";
// for (var i = 1; i <= 5; i++) {
// console.log(str.repeat(i));
// }

//END 10.




// --------------------------------------------------------------------------------------------------------------------------------




// 11. Napisz program JavaScript, aby obliczyć NAJWIĘKSZY WSPÓLNY DZIELNIK (GCD) dwóch dodatnich liczb całkowitych
// var number1 = 153,
//     number2 = 48;

// function findDivisors(number){   //funkcja znajdujaca wszytskie dzielniki wskazanej liczby
//     var tableOfDivisors = [];
//     for(var i=number; i>=1; i--){
//         if(number%i === 0){
//             tableOfDivisors.push(i);
//         }
//     }
//     return tableOfDivisors;
// }

// function findMaxCommonDiv(tab1, tab2) {   //funkcja szukajaca najwiekszego wspolnego elementu w dwoch tabelach z dzielnikami 
//     var maxDiv;
//     for(var element of tab1){
//         if( tab2.indexOf(element) !== -1 ){
//             return  maxDiv = element;
//         }
//     }
// }

// var divisorsNumber1 = findDivisors(number1);   //dzielniki dla liczby 1
// var divisorsNumber2 = findDivisors(number2);    // dzielniki dla liczby 2
// // console.log(divisorsNumber1);
// // console.log(divisorsNumber2);
// var greatestCommonDivisor = findMaxCommonDiv(divisorsNumber1,divisorsNumber2);  //NWD
// console.log(greatestCommonDivisor);

// inny sposób wykonania
// var a = 2154; //First number
// var b = 458;  //Second number 
// var gcd;
// while (a!=b)
// {
// 	if (a>b)
// 	{
// 		a = a - b;
// 	}
// 	else
// 	{
// 		b = b - a;
// 	}
// }
// gcd = a;
// console.log(gcd);


//END 11.





// --------------------------------------------------------------------------------------------------------------------------------



// 12. Napisz program JavaScript, aby zsumować wielokrotności 3 i 5 poniżej 1000.
// var sum = 0;
// for(var i=1; i<11; i++) {
//     if( i%3 === 0 || i%5 === 0 ) {
//         sum += i;
//     }
// }
// console.log(sum);

// END 12.





// --------------------------------------------------------------------------------------------------------------------------------



//SPRAWDZENIE PEŁNOLETNOSCI
//spradzamy czy wszyscy użytkownicy są pełnoletni

// //poprzednio
// const allMinors = tabUsers.every(function(el) {
//     return el.age > 18;
// });

// //teraz
// const allMinors = tabUsers.every(el => el.age > 18);

// --------------------------------------------------------------------------------------------------------------------------------

//FILTROWANIE
//sprawdzam czy ostatnia litera imienia to "a" (nędzne założenie że to damkie imię, co jest nieprawdą...)

// //poprzednio
// const woman = tabUsers.filter(function(el) {
//     return el.charAt(el.length-1) == 'a';
// });

// //teraz
// const woman = tabUsers.filter(el => el.charAt(el.length-1) == 'a');