import {AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

export class CustomValidationService {
  passwordMatch(): AsyncValidatorFn {
    return (control): Observable<ValidationErrors | null> => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        return of({'passwordMatch': true});
      } else {
        return of(null);
      }
    }
  }
}
