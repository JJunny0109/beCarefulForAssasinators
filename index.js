let plainText = document.querySelector("#plainTextArea").value; //입력한 메시지
const resultText = document.querySelector("#resultTextArea"); //출력할 장소
let KEY_NUMBER = Number(document.querySelector("#keyNumber").value); //키코드 언제든지 변경가능하여야함
const aryEnglish = /[a-zA-Z]/; //영어인지 구별하는 배열


//입력창에 있는 plainMessage를 KEY_NUMBER을 더해서 암호화하여 리턴
function encryptMessage(){
  let encodedCipher = ""
  for (var i = 0; i < plainText.length; i++) {
    // plainMessage에서 i번째 글자가 알파뱃인지를 구별
    if ((aryEnglish.test(plainText.charAt(i)))){
      // 키코드에서 1을 제하고, 나머지에 1을 더해야 0이 나오지 않는다. A = 1, B = 2 라서 이렇게 구성하였음
      let numberizedLetter = ((parseInt(plainText.charAt(i), 36) - 9 + KEY_NUMBER -1 ) % 26) + 1;
      let x = String.fromCharCode(numberizedLetter + 64);
      encodedCipher += x;
    }
    else {
      let x = plainText.charAt(i);
      encodedCipher += x;
    }
  }
  return encodedCipher;
}

//키가 입력될 때 writeOnIt 함수 실행
function writeOnIt(){
  plainText = document.querySelector("#plainTextArea").value;
  KEY_NUMBER = Number(document.querySelector("#keyNumber").value);
  resultText.innerText = encryptMessage();
}
document.addEventListener("keyup",writeOnIt);