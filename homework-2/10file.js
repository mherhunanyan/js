// Գրել ֆունկցիա, որը որպես արգումենտ կստանա զանգված բաղկացած թվերից 
// և կվերադարձնի նոր զանգված որտեղ կլինեն միայն կրկնվող թվերը:

function foo(arr) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
      let isRepeating = false;
      
      for(let j = 0; j < i; j++) { 
        if(arr[i] === arr[j]) {
          isRepeating = true;
          break; 
        }
      }
      
      if(!isRepeating) { 
        for(let k = i + 1; k < arr.length; k++) {
          if(arr[i] === arr[k]) {
            result.push(arr[i]); 
            break;
          }
        }
      }
    }
    
    return result;
  }
  
 console.log(foo([1, 2, 3, 2, 4, 5, 5]));
  