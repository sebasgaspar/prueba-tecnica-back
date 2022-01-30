"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterface = void 0;
class ResponseInterface {
    constructor({ ok, status, message, data }) {
        this.ok = ok;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.ResponseInterface = ResponseInterface;
