// union
// 함수에서 어떤 작업을 하는지에 따라 유니언 타입을 이용하여 더 유연하게 작업 가능
// 매개변수를 유연하게 받을 수 있음

// 타입 별칭(Type Alias)
// 유니온타입을 계속 사용하면 번거로움, 타입 별칭 지정, 재사용 가능, 리터럴타입도 사용가능
// 오타를 피할 수 있고 코드가 간결해짐
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    // input1: number | string, //유니온 타입
    // input2: number | string, 
    input1: Combinable, //타입 알리어스 
    input2: Combinable,
    // resultConversoin : string //리터럴타입
    // resultConversoin : 'as-number' | 'as-text' //리터럴 타입에 유니온타입 지정
    resultConversoin: ConversionDescriptor,
    ) {
    let result;
    // if (typeof input1 === 'number' && typeof input2 === 'number') {
    //     result = input1 + input2 ; 
    // } else {
    //     result = input1.toString() + input2.toString();
    // }

    // 리터럴타입으로 구분하여 문자>숫자변환

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversoin === 'as-number') {
        result = +input1 + +input2 ; //문자를 숫자로 변환
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

    //리터럴타입 지정 후 구분
    // if (resultConversoin === 'as-number'){
    //     return +result;
    // }else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);


// -------------------------------------------//
// 타입 알리어스 및 객체 타입
// 타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

// 예:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// 타입 별칭을 사용하면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있습니다.

// 예를 들어, 다음 코드를 아래와 같이 단순화할 수 있습니다.

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// 단순화 후:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }