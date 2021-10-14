namespace FactoryDP {
  interface ICarSupplier {
    color: string;
    getModel(): string;
  }

  class Honda implements ICarSupplier {
    _color: string;
    getModel(): string {
      return 'Honda city';
    }
    public get color(): string {
      return this._color;
    }
    public set color(v: string) {
      this._color = v;
    }
  }

  class Suzuki implements ICarSupplier {
    _color: string;
    getModel(): string {
      return 'Suzuki bolan';
    }
    public get color(): string {
      return this._color;
    }
    public set color(v: string) {
      this._color = v;
    }
  }

  class CarFactory {
    public getCarInstance(id: number): ICarSupplier | null {
      switch (id) {
        case 0:
          return new Honda();
        case 1:
          return new Suzuki();
        default:
          return null;
      }
    }
  }

  // this CarFacotry class is responsible for creating factory classes
  const carFactory = new CarFactory().getCarInstance(1);
  carFactory!.color = 'Black';

  console.log(carFactory?.getModel());
  console.log(carFactory?.color);
}
