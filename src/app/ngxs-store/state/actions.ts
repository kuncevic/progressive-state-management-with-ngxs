export class AdjustCounter {
    public static type = '[Counter] Adjust Count';
    constructor(public amount: number) {}
}

export class ResetCounter {
    public static type = '[Counter] Reset Count';
    constructor() {}
}
