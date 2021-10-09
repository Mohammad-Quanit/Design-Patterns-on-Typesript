// ********************* example 1 **************************
class Singleton1 {
  private static instance: Singleton1;
  private constructor() {}
  static getInstance() {
    if (!Singleton1.instance) {
      Singleton1.instance = new Singleton1()
    }
    return Singleton1.instance
  }
}
console.log(Singleton1.getInstance() === Singleton1.getInstance())

// ********************* example 2 **************************
class EnvVars {
  private static instance: EnvVars;
  private variables: { db: string; key: string; };
  constructor() {
    if(EnvVars.instance instanceof EnvVars) {
      return EnvVars.instance
    }
    this.variables = {
      db: 'dbVar',
      key: 'keyVar',
    }
    EnvVars.instance = this;
  }

  getVars() {
    return this.variables
  }
}

const env1 = new EnvVars()
const env2 = new EnvVars()
console.log(env1 === env2)
console.log(env1.getVars())


// **************** example 3 **********************
namespace NamespaceSingleton {
  export function greet(): string {
    return 'Hello from namespace singleton'
  }
}

let s1 = NamespaceSingleton;
let s2 = NamespaceSingleton;

console.log(s1 === s2)