function max(a,b){
    if(a>b){
        return a;
    }
    else{ return b;}
}
function maxOfThree(a,b,c){
    return max(max(a,b),c);
}
function isVowel(ch){
    if(ch==a||ch==e||ch==i||ch==o||ch==u){
        return true;
    }
    else {
        return false;
    }

}
function sum(arr){
    let su=0;
    for(let i=0;i<arr.length;i++){
        su+=arr[i];
}
return su;
}
function multiply(arrMul){
    let element =1;
    for (let i = 0; i < arrMul.length; i++) {
         element *= arrMul[i];
        }
        return element;
}
function reverse(element){
    let reversed='';
    for(let i=element.length-1; i>=0; i--){
        reversed=reversed+element.charAt(i);
}
   return reversed;

}

function findLongestWord(arrWords=[]) {
    let lon;
    let len=0;
    for(let i=0; i<arrWords.length;i++){
        if(arrWords[i].length>len){
            len=arrWords[i].length;
            lon=arrWords[i];
        }
}
return lon;

}

function filterLongWords(normal=[], i){
   
    return normal.filter(word => word.length > i);
   
}


const bold = [1,3,5,3,3]; 


// multiply each element by 10;
const b = bold.map(function(elem, i, array) {
  return elem * 10;
});


// return array with all elements equal to 3
const cold=bold.filter(function(elem,i,array){
    return elem==3;
});


// return the product of all elements
const d=bold.reduce(function(value, elem, i, array){
    return value*elem;
});




/* ******************************** Test ***************************** */



/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected == found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

  console.assert((myFunctionTest(60, max(60, 50)))==="TEST SUCCEEDED",'Failed assert test');

  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10,sum([1,2,3,4])));
  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24,multiply([1,2,3,4])));
  console.log("Expected output of reverse('dawit') is nomis  " + myFunctionTest('tiwad',reverse('dawit')));
  console.log("Expected output of findLongestWord(['helen','nahom','berhane','luli']) is berhane  " + myFunctionTest('berhane',findLongestWord(['helen','nahom','berhane','luli'])));
  console.log("Expected output of filterLongWords(['class','javascript','python','php'],5) is 'javascript'" 
  + myFunctionTest('javascript',filterLongWords(['class','javascript','python','php'],5)));
