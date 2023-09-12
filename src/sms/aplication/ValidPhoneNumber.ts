export class ValidPhoneNumber {
  constructor(private readonly phoneNumber: string){}

  isValid() {
    const regex = /^[+][0-9]{12}$/;
    return regex.test(this.phoneNumber);
  }
}
