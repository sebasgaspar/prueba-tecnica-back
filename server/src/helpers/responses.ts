import { ResponseInterface } from "../interfaces";

export function successResponse({ message, data }) {
    return new ResponseInterface({
        ok: true,
        status: 200,
        message: message,
        data: data
    });
}

export function failureResponse({ message, data }) {

    return new ResponseInterface({
        ok: false,
        status: 400,
        message: message,
        data: data
    })
}

export function errorResponse({ message }) {

    return new ResponseInterface({
        ok: false,
        status: 500,
        message: message,
        data: null
    })
}