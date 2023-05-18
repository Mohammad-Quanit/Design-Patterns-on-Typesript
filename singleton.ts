// ********************* example 1 **************************
class SingletonPattern {
  private static instance: SingletonPattern
  constructor() {}

  static getInstance() {
    if(!SingletonPattern.instance) {
      SingletonPattern.instance = this
    }
    return SingletonPattern.instance
  }
}

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
