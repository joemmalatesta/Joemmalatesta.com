import nodemailer from 'nodemailer';
let email = import.meta.env.EMAIL
let password = import.meta.env.EMAIL_PASSWORD


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: password
    }
});

export async function post({ request }) {
    const data = await request.json();
    const mailOptions = {
        from: "joemmalatesta1@gmail.com",
        to: "joemmalatesta@gmail.com",
        subject: 'New message from your website',
        html: `<p><strong>Name:</strong>${data.name}</p>
               <p><strong>Email:</strong>${data.email}</p>
               <p><strong>Message:</strong>${data.message}</p>`,
    };

    let payload = {
        message: "failure"
    }

    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    payload.message = `failure`
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    payload.message = `success`
                    resolve();
                }
            });
        });
    } catch (error) {
        // Handle error if necessary
    }

    console.log(payload.message)
    return {
        body: JSON.stringify(payload)
    };
}