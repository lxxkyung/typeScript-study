// void
// 반환 구문이 없다. 아무것도 반환하지 않는다.
// 오류 발생도 없음
// 아무값도 반환하고 싶지 않은 경우, 어떤 값도 반환하도록 강요하지 않음

// 타입 기능을하는 함수
// function 타입은 어떤 타입의 함수를 사용할 것인지 정의할 수 있게 해줌.
// 함수를 생성할 때 어떤 값의 매개변수를 받을지, 콜백이나 값의 타입 지정 가능

function add (n1: number, n2:number){
    return n1 + n2;
}

function printResult (num: number): void {//추론을 통해 타입스크립트에서는 자동으로 void라고 인식하지만 명시하겠음!
// function printResult (num: number): undefined { //오류 발생 / 함수가 아무것도 반환하지 않을때 undefined 타입 지정 불가
// 반환구문은 있지만 실제로 아무 값도 없을때 undefined 사용 but 사용 거의 안함
    console.log('Result: ' + num);
}

function addAndHandle (n1: number, n2: number, cb: (num: number) => void){// 콜백함수에서 아무것도 반환하지 않으려고 void로 명시
    //콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있습니다.
    const result = n1 + n2;
    cb(result)
}

// console.log(printResult(add(5, 12))); // undefined 반환
printResult(add(5, 12));

// let someValue: undefined; //타입스크립트에서 undefined는 유효한 타입.

// let combineValues: Function; // 함수라는 타입으로 지정해주면 아래 숫자로 지정한 코드** 컴파일 오류남, 지정하지 않으면 컴파일 오류 없음

// combineValues = add;
// combineValues = printResult; //컴파일 오류 안나지만 콘솔에는 undefined , 함수타입인 것은 충족했기 떄문에 반환하는 값이 없는 것은 구분 불가능
// combineValues = 5; // 컴파일 오류 안남. 런타임에서 오류.**

let combineValues: (a: number, b:number) => number; // 함수 화살표 함수로 지정가능 , 매개변수 타입만 맞춰주면 됨

combineValues = add; //타입 지정이 맞기 때문에 오류 안남
// combineValues = printResult; //함수가 타입이 맞지 않아서 오류

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {//result 타입을 명시하지 않아도 콜백함수에서 지정했기 떄문에 타입을 알 수 있음. 그래서 인자를 추가 전달하려하면 오류가 발생함
    console.log(result);
});
