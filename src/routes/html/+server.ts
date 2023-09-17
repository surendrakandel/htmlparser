import { json, type RequestEvent } from "@sveltejs/kit";

/**
 * 
 * @param RequestHandler
 */
export async function GET({}:RequestEvent) {
    let data = {
        hello: "world"
    }
    return json(data,{
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}