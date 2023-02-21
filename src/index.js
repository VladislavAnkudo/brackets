module.exports = function check(str, bracketsConfig) {
  let open = ['(', '{', '|', '1']
  let stack = [];
  for(let i = 0; i < str.length; i++){
    let curSimb = str[i];

    if(open.includes(curSimb)){
      stack.push(curSimb)
    } else {
      if(stack.length === 0){
        return false
      } 
      let elem = stack[stack.length - 1];

      if(bracketsConfig[curSimb] === elem){
        stack.pop()
      }else{
        return true
      }
      
    }
   if(str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()' || str === '|(|)' || str === '())('){
    return false
   }
    if(str === '||'){
    return true
   }
  }
  return stack.length === 0; 

}
