// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UNSAFE_any = any;

export type MaybePromise<TReturn = void> = Promise<TReturn> | TReturn;
