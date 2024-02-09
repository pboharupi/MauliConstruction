import React from "react";

function EmailSend()
{
const mailjet = require ('node-mailjet')
	.connect("2431c09a448e1937c13fbb7ff9ad9f90", "9f6d976790909dac0a9db00b564c6b3c")
const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
				{
						"From": {
								"Email": "pilot@mailjet.com",
								"Name": "Mailjet Pilot"
						},
						"To": [
								{
										"Email": "pboharupi@gmail.com"
								}
						],
						"Subject": "Your email flight plan!",
						"TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
						"HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
				}
		]
	})
request
	.then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(err.statusCode)
	})
}

export default EmailSend;