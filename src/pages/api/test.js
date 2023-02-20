import nodemailer from 'nodemailer';

export async function post({ request }) {
    const data = await request.json();
    console.log(data);
    return {
        body: { message: "Server received your message!" }
    };
}