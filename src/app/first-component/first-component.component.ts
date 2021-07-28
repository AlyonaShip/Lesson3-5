import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  promotionApplicationForm!: FormGroup;
  promotionApplication!: PromotionApplication;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.buildForm();
    this.populateForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.promotionApplicationForm = this.formBuilder.group({
      firstName: ['', { validators: this.validateName, updateOn: 'blur'}],
      lastName: ['', Validators.required],
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        district: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required])
      }),
      position: ['', Validators.required],
      salary: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  private populateForm() {
    this.promotionApplication = JSON.parse(localStorage.getItem('promotionApplication')!);

    if (this.promotionApplication) {
      this.promotionApplicationForm.setValue(this.promotionApplication);
    }
  }

  public clearData() {
    localStorage.clear();
    this.promotionApplicationForm.reset();
  }

  public onSubmit() {
    this.promotionApplication = this.promotionApplicationForm.value;
    localStorage.setItem('promotionApplication', JSON.stringify(this.promotionApplication));
  }

  public isControlInvalid(controlName: string) {
    let control = this.promotionApplicationForm.get(controlName);
    return !control?.valid;
  }

  public isErrorExist(controlName: string, errorType: string) {
    let control = this.promotionApplicationForm.get(controlName);

    if (control) {
      return control.errors![errorType];
    }
    return false;
  }

  public validateName(control: AbstractControl): ValidationErrors {
    if (control.value === 'COM9') {
      return { invalidValue: true };
    }
    return null!;
  }
}

export class PromotionApplication {
  firstName!: string;
  lastName!: string;
  address!: OfficeAddress;
  position!: string;
  salary!: number;
  reason!: string;
}

export class OfficeAddress {
  city!: string;
  district!: string;
  zipCode!: string;
}
