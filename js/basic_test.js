type="text/javascript"; src="js/basic_test.js"; 
// 한줄 주석: 임시 자바스크립트 파일을 생성했습니다.
var jb = 'hi'; // 이런 식으로 변수 선언 뒤에 주석처리 가능
var a = 1;
var b;
b = 5;

if (true) {
  let c = 'let 접근';
  var c_1 = 'var 접근';
}
//console.log(c); // Error?
console.log(c_1);

let d = 5;
//let d = '값 재할당'; // Error?
console.log(d);

const e = '상수1 접근';
//e = 5;
//const f  // Error?
console.log(e);

/*
여러 줄 주석: 여러줄에 걸쳐서 주석처리 가능
*/