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
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10,sum([1,2,3,4])));
  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24,multiply([1,2,3,4])));
  console.log("Expected output of reverse('dawit') is tiwad  " + myFunctionTest('tiwad',reverse('dawit')));
  console.log("Expected output of findLongestWord(['helen','nahom','berhane','luli']) is berhane  " + myFunctionTest('berhane',findLongestWord(['helen','nahom','berhane','luli'])));
  console.log("Expected output of filterLongWords(['tesfahannes','life','assert','late'],7) is 'tesfahannes'" 
  + myFunctionTest('tesfahannes',filterLongWords(['tesfahannes','life','assert','late'],7)));
  

  console.assert((myFunctionTest(60, max(60, 50)))!="TEST SUCCEEDED",'Failed assert test');

  console.assert((myFunctionTest(78, maxOfThree(78,45, 50)))=="TEST SUCCEEDED",'Failed assert test')
  console.assert(( myFunctionTest(10,sum([1,2,3,4])))=="TEST SUCCEEDED",'Failed assert test')
  console.assert(( myFunctionTest(24,multiply([1,2,3,4])))=="TEST SUCCEEDED",'Failed assert test')
  console.assert(( myFunctionTest('tiwad',reverse('dawit')))=="TEST SUCCEEDED",'Failed assert test')
  console.assert(( myFunctionTest('berhane',findLongestWord(['helen','nahom','berhane','luli'])))=="TEST SUCCEEDED",'Failed assert test')
  console.assert(( myFunctionTest('tesfahannes',filterLongWords(['tesfahannes','life','assert','late'],7)))
  =="TEST SUCCEEDED",'Failed assert test')
  
