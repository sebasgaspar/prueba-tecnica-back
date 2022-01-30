export interface ClientModel {
    id?: number,
    name: string
    lastName: string
    email: string
    username: string
    password: string
}

export class ResponseInterface {

    ok: Boolean;
    status: number;
    message: string;
    data: any;

    constructor({ ok, status, message, data }) {
        this.ok = ok
        this.status = status
        this.message = message
        this.data = data
    }
}