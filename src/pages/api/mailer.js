import nodemailer from "nodemailer";
let email = import.meta.env.EMAIL;
let password = import.meta.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass: password,
	},
});

async function emailNewSubscriber(email) {
	const mailOptions = {
		from: "joemmalatesta1@gmail.com",
		to: email,
		subject: `Subscribed!`,
		html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Subscribe/Unsubscribe Email</title>
          <style>
            /* Basic styling */
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
            }
        
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
        
            h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 20px;
            }
        
            p {
              color: #666;
              font-size: 16px;
              line-height: 1.5;
            }
        
            a {
              color: #007bff;
              text-decoration: none;
            }
        
            .message {
              margin-bottom: 10px;
            }
        
            .subscribe {
              color: #28a745;
            }
        
            .unsubscribe {
              color: #dc3545;
            }
        
            @media (max-width: 480px) {
              /* Responsive styles for phones */
              h1 {
                font-size: 20px;
              }
        
              p {
                font-size: 14px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Subscribed :D</h1>
            <p class="message">
            hey there, thanks for joining me! You're gunna have a dollar in no time from all this sense I'm bouta give you.
            </p>
            <p class="message">
            If you hate me, you can unsubscribe
            IIf you hate me, you can <a class="unsubscribe" href="https://www.joemmalatesta.com/unsubscribe">unsubscribe</a>
            </p>
          </div>
        </body>
        </html>
        `,
	};
	try {
		await new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log("Email sent: " + info.response);
					resolve();
				}
			});
		});
	} catch (error) {
		console.log(error);
	}
}

async function emailUnsubscriber(email) {
	const mailOptions = {
		from: "joemmalatesta1@gmail.com",
		to: email,
		subject: `Unsubscribed`,
		html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe</title>
  <style>
    /* Basic styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }

    .message {
      margin-bottom: 10px;
    }

    .subscribe {
      color: #28a745;
    }

    .unsubscribe {
      color: #dc3545;
    }

    @media (max-width: 480px) {
      /* Responsive styles for phones */
      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Unsubscribed :(</h1>
    <p class="message">
        Successfully unsubscribed from blog post updates.
    </p>
    <p class="message">
    If you ever wanna come back, you can <a class="subscribe" href="https://joemmalatesta.com/#blog">subscribe again!</a>
    </p>
  </div>
</body>
</html>
        `,
	};
	try {
		await new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log("Email sent: " + info.response);
					resolve();
				}
			});
		});
	} catch (error) {
		console.log(error);
	}
}

export { emailNewSubscriber, emailUnsubscriber };
