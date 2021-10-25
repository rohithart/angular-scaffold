import { ToastrService } from 'ngx-toastr';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';

import { Crumbs } from 'src/app/models/Crumbs';
import { Contact } from 'src/app/models/Contact';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  @ViewChild("submitForm") private submitForm!: NgForm;

  crumbs: Crumbs[] = [
    { name: 'Feedback', url: '/feedback' },
  ]

	public feedbackForm: FormGroup;

	constructor(private emailService: EmailService, private toaster:ToastrService) {
	  this.	feedbackForm = new FormGroup({
	    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
	    email: new FormControl('', [Validators.required, Validators.email]),
	    message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
	  });
	}

	hasError = (controlName: string, errorName: string) =>{
	  return this.feedbackForm.controls[controlName].hasError(errorName);
	}

	public sendContact = (feedbackValue: Contact) => {
	  if (this.feedbackForm.valid) {
	    this.sendEmail(this.feedbackForm.value);
	  }
	}

	public reset() {
	  this.feedbackForm.reset({
	    'name': '',
	    'email': '',
	    'message': '',
	  });
	}

	private sendEmail = (formData: any) => {
	  this.emailService.sendFeedbackEmail(formData).then(
	    (data) => {
	      this.submitForm.resetForm();
	      this.toaster.success('Success', 'Email successfully send.');
	    },
	    (error) => {
	      console.log(error);
	    }
	  );
	}
}
