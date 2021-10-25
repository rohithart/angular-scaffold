import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(emailParam: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(environment.email.service_id, environment.email.template_id, emailParam, environment.email.user_id)
  }

  sendContactEmail(data: any): Promise<EmailJSResponseStatus> {
    data.product = 'Angular-Scaffold';
    return this.sendEmail(data);
  }

  sendFeedbackEmail(data: any): Promise<EmailJSResponseStatus> {
    data.product = 'Angular-Scaffold';
    return this.sendEmail(data);
  }
}
