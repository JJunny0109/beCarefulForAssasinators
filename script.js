//입력값 넣기
let plainText = "HelloWorld";
console.log(`입력값:${plainText}`);


//입력값 한글자 씩 잘라서 숫자로 변환한 후에 키숫자 더하고 이를 다시 문자로 전환
let theResults = "";
let keyNumber = 3;
for (var i = 0; i < plainText.length; i++) {
  let numberizedLetter = parseInt(plainText.charAt(i), 36) - 9 + keyNumber;
  if (numberizedLetter == NaN) {
    numberizedLetter = " ";
  }
  let encodedCipher = String.fromCharCode(numberizedLetter + 64);
  theResults = theResults + encodedCipher;
  
}
console.log(`출력값:${theResults}`);