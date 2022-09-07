export default class Subject {
  name: string;

  constructor (name: string) {
    this.name = name;
  }

  Subject(name: string) {
    this.name = name;
  }

  observers: Set<string> = new Set<string>();

  register(observers: Set<string>) {
    for(var observer of observers) {
      this.observers.add(observer);
    }
  }

  unregister(observers: Set<string>) {
    for(var observer of observers) {
      this.observers.delete(observer);
    }
  }

  publish(msg: string) {
    for(var observer of this.observers) {
      this.observers.forEach(observer[this.publish, msg])
    }
  }
}
