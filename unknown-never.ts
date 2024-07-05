// unknown
// any보다 제한적

let userInput: unknown; // string에 할당 불가
// let userInput: any; // 오류 안남
let userName: string;

userInput = 5;
userInput = 'Max'

//unknown 타입 값을 타입이 정해진 변수에 할당하기 위해서는 별도 확인 작업 필요./ any보다 나은 점
if (typeof userInput === 'string'){
    userName = userInput
}

// never
// 함수를 반환할 수 있다
// 절대 반환값을 생성하지 않음

function generateError (message: string, code: number): never {//never을 반환함
    throw {message: message, errorCode: code}; // 스크립트 실행 취소하기 때문에 아래 console반환 x 
    // try-catch 구문을 넣어도 위 throw에서 실행 멈춤. 그래서 반환 값 없음
    
    // 무한 루프도 마찬가지. 에러구문이 보다 더 많이 사용됨
    // while (true) {}
}


const result = generateError('오류 발생', 500);
console.log(result); // 컴파일하면 undefined 보이지 않음. 
 