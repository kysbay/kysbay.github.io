import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import * as bootstrap from 'bootstrap';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewChecked {
    formUrl: string;
    cform: FormGroup;
    modalMessage = "We appreciate your interest. We'll be in touch soon.";
    messages = {
        success: "We appreciate your interest. We'll be in touch soon.",
    };
    constructor(private http: HttpClient) {
        this.cform = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', [Validators.required]),
            summary: new FormControl('', [Validators.required]),
        });
        this.formUrl = environment.formsUrl;
    }

    ngOnInit(): void {}

    ngAfterViewChecked(): void {}

    submit() {

        if (this.cform.valid) {
            this.http
                .post(this.formUrl, this.cform.value, {
                    headers: { Accept: 'application/json' },
                })
                .subscribe((response: any) => {
                    this.cform.reset();
                    this.showModal();
                });
        }
    }

    showModal() {
        const myModal = new bootstrap.Modal(
            document.getElementById('myModal') as any,
            {},
        );
        myModal.show();
    }
}
