import { Resend } from 'resend'
import EmailTemplate from './../emails/mailTemplate'
import { CONFIG } from './config'

console.log('Running Envrionemt:', CONFIG.ENV)

const resend = new Resend(CONFIG.RESEND_API_KEY)

resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'jitunayak715@gmail.com',
        subject: 'Email Verification',
        react: EmailTemplate({
                name: 'React Email',
                content: ' Verify your emaild address by clicking on link below',
        }),
})
