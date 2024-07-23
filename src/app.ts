/**
 * 클래스 & 인터페이스
 * private = 접근 제한자 / public = 외부에서 액세스 가능
 * readonly = 읽기 전용 초기화된 후 수정할 수 없음.
 * protected = private와 유사 , 외부 액세스를 제한 , 상속 받은 클래스에서도 액세스 가능
 */
class Department {
    // name: string; // public name: string; 과 동일
    // private id : string;
    // private name : string;
    // private employees: string[] = []; //besides properties, you can also mark methods as "private" (속성 외에도 메소드를 "비공개"로 표시할 수도 있습니다.)
    //private를 붙이면 클래스 또는 생성된 객체 안에서만 이 프로퍼티를 액세스할 수 있음.
    protected employees: string[] = [];

    constructor (private readonly id: string, public name: string) {// 초기화 코드 없이 한번에 정의 하고 값을 할당,
        //생성자에서 받을 인수를 명시하고 접근 제한자가 달린 인수는 동일한 이름의 프로퍼티를 생성, 인수에서 받은 값을 프로퍼티에 저장 // 코드가 간결해짐
        //readonly 읽기전용으로 해야할 경우가 있음. -> 타입 안전성을 지킬수 있고 명확한 의도 표현 가능

        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) { //항상 Department를 참조, 다른 객체 참조하는 것은 오류남- accountingCopy.describe(); 
        //더미 매개변수를 추가해 타입 안전성을 지킬 수 있음
        // console.log('Department:' + this.name);
        console.log(`Department( ${this.id} ): + ${this.name}`);
    }
    
    addEmployee (employee: string) {
        // validation etc
        // this.id = 'd2'; // 위에 읽기전용으로 설정, 오류남
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

/**
 * 상속
 */
class ITDepartment extends Department {
    admins: string[];
    constructor (id: string,  admins: string[]) {
        super(id, 'IT'); //super은 부모 클래스 생성자의 인수 id,name을 받는다 
        this.admins = admins;
    }
}

//기본 클래스의 메서드를 오버라이드 해서 기본 클래스에 구현된 메서드 대신 상속받은 클래스에서 구현한 매서드를
//protected를 사용하면 상속받은 클래스에서도 프로퍼티를 사용할 수 있다.
class AccountingDepartment extends Department {
    private lastReport: string;

    //getters/setters
    //비공개로 설정할 필요가 있는 속성을 private로 설정한 후, 
    //이 속성에 접근하여 값을 읽거나, 쓰기 위한 Getter, Setter 함수를 사용하여 속성을 정의할 수 있습니다.
    //게터 get
    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    //세터 set
    set mostRecentReport(value: string) {
        if (!value){
            throw new Error ('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    constructor (id: string, private reports: string[]) {
        super(id, 'Accounting'); 
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
        
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Max']);
const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printEmployeeInformation();
accounting.printReports();

// console.log(accounting);

it.addEmployee('MAX');
it.addEmployee('manu');

// accounting.employees[2] = 'Anna'; //가능은 하지만 복잡한 것을 만들 떄 좋지 않음., 한가지 방법으로 제한하는 것이 좋음
//검증하는 과정이 생략됨. 
//private를 붙이면 해당 코드 오류 발생, department 클래스 안에서만 액세스 가능함
//컴파일 할때는 에러가 발생하지만 자바스크립트에서는 오류 발생x

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { name: 's', describe : accounting.describe}
//name 프로퍼티 추가하면 아래 호출오류 안남

// accountingCopy.describe(); //객체의 메소드를 참조하는 것, 메서드 실행이 아니라서 undefined로 출력
//accountingCopy객체를 참조, accountingCopy는 name이 없어서 this.name 출력 x