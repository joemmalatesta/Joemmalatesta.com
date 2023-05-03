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

async function emailNewSubscriber(email) {

    const mailOptions = {
        from: "joemmalatesta1@gmail.com",
        to: email,
        subject: `Subscribed!`,
        html:`
        hey there fella, thanks for joining me! You're gunna have a dollar in no time from all this sense I'm bouta give you.
        <br>
        <span>If you hate me, you can </span><span><a href="https://joemmalatesta.com/unsubscribe">unsubscribe</a></span>
        `,
 } 
 try {
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve();
            }
        });
    });
} catch (error) {
    return
}


};

async function emailUnsubscriber(email) {

    const mailOptions = {
        from: "joemmalatesta1@gmail.com",
        to: email,
        subject: `Unsubscribed`,
        html:`
        Successfully unsubscribed from blog post updates.
        <br>
        <span>If you ever wanna come back, you can </span><span><a href="https://joemmalatesta.com/#blog">subscribe again!</a></span>
        `,
 } 
 try {
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve();
            }
        });
    });
} catch (error) {
    console.log(error)
}


};



 export { emailNewSubscriber, emailUnsubscriber }