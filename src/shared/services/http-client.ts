import { HttpRequestMethods } from '../types/http'

class HttpClient {
    protected static async get(resourcePath: string, headers?: Record<string, string>) {
        const request = await fetch(resourcePath, {
            method: HttpRequestMethods.GET,
            headers,
        })
        const responseObject = await request.json()
        return responseObject
    }

    protected static async post<T>(resourcePath: string, body: T, headers?: Record<string, string>) {
        const request = await fetch(resourcePath, {
            method: HttpRequestMethods.POST,
            headers,
            body: JSON.stringify(body),
        })
        const responseObject = await request.json()
        return responseObject
    }
}

export default HttpClient
