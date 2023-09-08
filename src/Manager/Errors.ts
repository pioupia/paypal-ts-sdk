"use strict";

export function configError() {
    throw new PaypalTSError("You have to configure the package before trying to do anything with it. Please use the `config` function before.");
}

export default class PaypalTSError extends Error {
    constructor(message: string) {
        super(message);
        Error.captureStackTrace?.(this, PaypalTSError);
    }

    override get name() {
        return "PaypalSDK";
    }
}