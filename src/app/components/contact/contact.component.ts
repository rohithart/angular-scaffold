import { ToastrService } from 'ngx-toastr';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { EmailService } from 'src/app/services/email.service';
import { Crumbs } from 'src/app/models/Crumbs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild("submitForm") private submitForm!: NgForm;

  crumbs: Crumbs[] = [
    { name: 'Contact', url: '/contact' },
  ]
	public contactForm: FormGroup;

	constructor(private emailService: EmailService, private toaster:ToastrService) {
	  this.	contactForm = new FormGroup({
	    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
	    email: new FormControl('', [Validators.required, Validators.email]),
	    subject: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
	    message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
	  });
	}

	hasError = (controlName: string, errorName: string) =>{
	  return this.contactForm.controls[controlName].hasError(errorName);
	}

	public sendContact = (contactValue: Contact) => {
	  if (this.contactForm.valid) {
	    this.sendEmail(this.contactForm.value);
	  }
	}

	public reset() {
	  this.contactForm.reset({
	    'name': '',
	    'email': '',
	    'subject': '',
	    'message': '',
	  });
	}

	private sendEmail = (formData: any) => {
	  this.emailService.sendContactEmail(formData).then(
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
