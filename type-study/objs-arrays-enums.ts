// const person: {
//     name: string;
//     age: number;
// } = { //명시해도 되지만 타입스크립트가 추론하도록 두는 것이 좋음

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //튜플: 배열의 길이가 고정, 각 요소의 타입 지정
// } = {
//     name: '아아아',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'], //배열
//     role : [2, 'author'], //튜플
// } // 객체형태

//---------------------------------------//
// 중첩된 개체 및 타입
// 물론 객체 타입은 중첩 객체에 대해서도 생성할 수 있습니다.

// 다음과 같은 자바스크립트 객체가 있다고 가정해 봅시다:

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// 이러한 객체의 타입은 아래와 같습니다.

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// 따라서 객체 타입 안에 객체 타입이 있다고 말할 수 있습니다.

//---------------------------------------//
//tuple
// person.role.push('admin'); // 타입스크립트는 튜플 .push() 에러를 잡지 못함***
// person.role[1] = 10; // 튜플로 타입 지정을 하면 오류 발생, 추론일때는 오류x

// person.role = [0, 'admin', 'user']; // 튜플은 길이기 고정되어 있있기 때문에 오류발생

// *** 몇개의 값을 배열에 담을지 명확하고 각 값의 타입도 미리 알고 있으면 
// 배열보다 튜플이 입력받은 데이터 타입을 더 명확하고 엄격하게 처리할 수 있음. ***

//---------------------------------------//
// enum 
// = 이름, 중괄호, 세미콜론으로만 표시 / 콜론이나 등호 xxxx

// 자바스크립트 상수 지정
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Role > 첫문자 대문자 = 처음 만드는 사용자 정의 타입
// 숫자에 레이블을 달았음.
enum Role { ADMIN, READ_ONLY, AUTHOR }; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 다른 숫자로 사용하고 싶으면 식별자에 등호와 숫자를 쓰면 자동으로 +1해서 구분, ADMIN = 5, READ_ONLY = 6, AUTHOR = 7
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }; // 각각 다른 숫자나 텍스트를 할당할 수 있음, 기본적으로 숫자 0으로 시작하지만 다른 형식(문자열이나 다른 숫자)도 가능

// 위에서 이렇게 정의하면 직접 만든 enum타입으로 어디서든 접근 가능 = enum의 강점
// 사람이 읽을 수 있는 식별자가 필요하고 내부적으로 매핑된 값이 있을 때 유용한 구성

const person = {
    name: '아아아',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role : Role.ADMIN,
}

let favoriteActivities: string[]; // 문자열 배열이라고 할당
favoriteActivities = ['Sports'];

//---------------------------------------//
//Any 
// let favoriteActivities: any[]; 

//유연하게 어떤 것이든 넣을수 있음 가능하면 사용하지 않는것이 좋다.
// any는 타입스크립트 컴파일러가 아무것도 확인하지 못하게 함.
// 어떤 값이나 데이터가 들어올지 모르는 상황 대비를 위해 쓸 수는 있음.

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby);
    //console.log(hobby.map()); // !!! ERROR !!! 문자열은 map() XX 타입추론 유용
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}
