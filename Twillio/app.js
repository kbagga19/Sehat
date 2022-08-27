const express = require('express')
const sgMail = require('@sendgrid/mail')
var cors = require('cors')


const app = express();
const API_KEY='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';
sgMail.setApiKey(API_KEY)
const port = 3000

app.use(express.json());
app.use(cors())

app.post('/mail', (req, res) => {
  const subject = req.body.subject ;
  const recieverMail = req.body.to ;
  const message = req.body.text ;
  const userEmoji = req.body.emoji;

  const emoji = `<img src="cid:${userEmoji}" width="60">`

  const msg = {
    to: recieverMail, 
    from: 'dmail3501@gmail.com', 
    subject: subject,
    html: message + userEmoji,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



