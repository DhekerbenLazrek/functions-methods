function toCamelCase(str) {
    let result = ''
    str = str.toLowerCase()
    for(let i=0; i< str.length; i++){
      if(str[i] === '_' || str[i] === '-'){
        i++;
        result += str[i].toUpperCase()
      } else {
        result+= str[i]
      }
    }
    return result
  }