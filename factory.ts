/**
 * Factory pattern says that just define an interface or class for an object
 * and let subclass decide which class to instantiate.
 */

enum Department {
  Engineering = 'engineering',
  Marketing = 'marketing',
  Accounting = 'accounting',
}

interface IEmployee {
  getDepartment(): Department;
  getSalary(): number;
  getName(): string;
}

class MarketingManager implements IEmployee {
  getName(): string {
    return 'Marketer 1';
  }
  getDepartment(): Department {
    return Department.Marketing;
  }
  getSalary(): number {
    return 20000;
  }
}

class SoftwareEngineer implements IEmployee {
  getName(): string {
    return 'Software Engineer 1';
  }
  getDepartment(): Department {
    return Department.Engineering;
  }
  getSalary(): number {
    return 70000;
  }
}

class AccountManager implements IEmployee {
  getName(): string {
    return 'Accountant 1';
  }
  getDepartment(): Department {
    return Department.Accounting;
  }
  getSalary(): number {
    return 100000;
  }
}

// This is the subclass which will instantiate above classes
class OrgFactory {
  private orgName: string;
  private employees: IEmployee[] = [];

  constructor(name: string) {
    this.orgName = name;
  }

  public get name(): string {
    return this.orgName;
  }

  addEmployees(employeeList: IEmployee[]) {
    this.employees = this.employees.concat(employeeList);
  }

  findEmployee(name: string): IEmployee | undefined {
    return this.employees.find((emp: IEmployee) => emp.getName() === name)
  }
}

const HBCFactory = new OrgFactory('HBC');
HBCFactory.addEmployees([
  new SoftwareEngineer(),
  new MarketingManager(),
  // new AccountManager(),
]);

// try to comment any manager class and provide its data in find HBCFactory.findEmployee() method,
// it will return undefined because subclass didn't instantiate the commented manager class
console.log(HBCFactory.findEmployee('Software Engineer 1')?.getSalary());
console.log(HBCFactory.findEmployee('Marketer 1')?.getDepartment());
console.log(HBCFactory.findEmployee('Accountant 1')?.getName());
