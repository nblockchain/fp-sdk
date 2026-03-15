interface IOption {
    /**
     * @deprecated it is better to use `if (foo instanceof None)` so that you can access the .value in the `else` case
     **/
    IsNone(): boolean;
    /**
     * @deprecated it is better to use `if (!(foo instanceof None))` so that you can access the .value inside the `if` block
     **/
    IsSome(): boolean;
}

export class None {
    public IsNone(): boolean {
        return true;
    }
    public IsSome(): boolean {
        return false;
    }

    /**
     * @deprecated it is better to use `Nothing`
     **/
    constructor() {}
}
export class Some<T> {
    value: T;

    constructor(val: NonNullable<T>) {
        this.value = val;
    }

    public IsNone(): boolean {
        return false;
    }
    public IsSome(): boolean {
        return true;
    }
}

export type Option<T> = (None | Some<NonNullable<T>>) & IOption;

export const Nothing = new None();

export class OptionHelpers {
    public static OfObj<T>(obj: T | null | undefined): Option<NonNullable<T>> {
        if (obj === null || obj === undefined) {
            return Nothing;
        } else {
            return new Some(obj);
        }
    }
}
