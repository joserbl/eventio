import {Injectable, Inject} from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
    displaySuccess(message: string, title?: string) {
        toastr.success(message, title);
    }

    displayInfo(message: string, title?: string) {
        toastr.info(message, title);
    }

    displayWarning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    displayError(message: string, title?: string) {
        toastr.error(message, title);
    }

}
