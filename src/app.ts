/**
 * 클래스 & 인터페이스
 */

class Department {
    name: string;

    constructor (n: string) {
        this.name = n;
    }

    describe(this: Department) { //항상 Department를 참조, 다른 객체 참조하는 것은 오류남- accountingCopy.describe(); 
        //더미 매개변수를 추가해 타입 안전성을 지킬 수 있음
        console.log('Department:' + this.name);
    }
}

const accounting = new Department('Accounting');

// console.log(accounting);

accounting.describe();

const accountingCopy = { name: 's', describe : accounting.describe}
//name 프로퍼티 추가하면 아래 호출오류 안남

accountingCopy.describe(); //객체의 메소드를 참조하는 것, 메서드 실행이 아니라서 undefined로 출력
//accountingCopy객체를 참조, accountingCopy는 name이 없어서 this.name 출력 x