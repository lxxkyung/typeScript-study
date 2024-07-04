/**
 * 타입 케이스
    타입스크립트에서는 항상 string 또는 number와 같은 타입을 다룹니다.
    중요:  string , number 등이 아니라 String 및 Number 등 입니다.
    타입스크립트의 주요 원시 타입은 모두 소문자입니다!
 */

 // 타입을 정의할때 :를 이용. 타입스크립트 문법!

function add(n1: number, n2: number, showResult : boolean, phrase: string) {
    const result = n1 + n2 ; // 수학적으로 처리 하지 않고 if문에 들어가면 문자열로 처리됨.
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result ;
    }
}

const number1 = 5;
const number2 = 2.8;
let number3 = 4; //타입 추론 가능, 변수에 타입을 지정하지 않아도 number3이 number이라고 추론함
const printResult = true;
const resultPhrase = 'Result is: '

add (number1, number2, printResult, resultPhrase);

/**
 * 
 * “타입”이 바닐라 자바스크립트보다 유용하며 큰 이점을 제공하는 이유는?
 * -> 타입을 사용하면 오류를 미리 감지하고 일부 런타임 오류를 방지할 수 있다.
 * 
 * 다음 코드는 컴파일 오류 발생시키는지?
 * let userName: string;
 * userName = 'Maximilian';
 * userName = false;
 * -> string 타입을 할당한 변수에 boolean을 할당하면 컴파일 오류 생김.
 * 
 * 타입 추론에 의존하는지?
 * const age: number = 29;
 * -> :number 이라고 타입이 명시되어있음. 해당 생략 가능
 * 
 * 타입스크립트 타입은 컴파일 중에 확인, 자바스크립트 타입은 런타임 중에 확인.
 */

