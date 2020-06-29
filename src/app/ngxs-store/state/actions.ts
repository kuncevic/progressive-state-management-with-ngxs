export class ResetCounter {
  public static type = '[Counter] Reset Count';
  constructor() {}
}

export class UpdateValue1 {
  public static type = '[Sum] Update Value1';
  constructor(public amount: number) {}
}

export class UpdateValue2 {
  public static type = '[Sum] Update Value2';
  constructor(public amount: number) {}
}

export class UpdateValue3 {
  public static type = '[Sum] Update Value3';
  constructor(public amount: number) {}
}
