// <!DOCTYPE html>
// <html lang="en-US">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>kushal</title>
// </head>
// <body>
//   <script>
// </script>
// </body>
// </html>

//FOURTH FUNCTION ASSIGNMENT QUESTION FOURTH
var number = [2,5,7,8,9];
var newArray=[];
var SquareAllArray=function(numbers){
    for(var i=0; i<numbers.length; i++){
        newArray.push(Math.pow(numbers[i],2));
    }
    console.log(newArray);
}