function checkForSpam(message) {
  let forbiddenWords = ["spam", "sale"];

  // Mesajı küçük harflere dönüştürüp yasaklı kelimeleri kontrol et
  message = message.toLowerCase();

  // Yasaklı kelimelerden birini içerip içermediğini kontrol et
  for (let word of forbiddenWords) {
    if (message.includes(word)) {
      return true;
    }
  }

  return false;
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
