/**
 * 매개변수
 * 매개 변수 기본값은 무조건 오른쪽 부터 지정 !!!
 */

// const add = (a: number, b: number = 1) => a + b; 

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
 

// printOutput(add(5)) //매개 변수 기본값

/**
 * ... 스프레드 연산자
 * 객체나 배열을 펼쳐서 가지고 올때 /복사
 */
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = { ...person };

/**
 * rest 매개변수 
 * = 값 목록을 받아들일 곳/ 값을 전달할 위치가 아니라 입력 값으로 받아들이고 싶은 위치에 넣으면 됨 
 * 인수 무제한적일 때 유용함
 */

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);

};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

/**
 * 배열 및 객체 비구조화 할당 (Array destructuring)
 */

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

//디스트럭처링 할 배열을 표현
//remainingHobbies 새로운 배열에 추가
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
