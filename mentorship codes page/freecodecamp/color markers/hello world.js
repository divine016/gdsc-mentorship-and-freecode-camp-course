function confirmEnding(str, target) {
    let lengthOfTarget = target.length;
    let sentence ="";
    let i = -lengthOfTarget;
        if(lengthOfTarget>1){
          sentence += str[i];
          i++;
        }
        else{
          sentence = str[i];
        }
        if(sentence == target){
          return true;
        }
        else{
        return false;
      }
    }
  
  console.log(confirmEnding("Connon", "n"));