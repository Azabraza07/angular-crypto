import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { API_URL } from '../constants/constants';
import { AuthUser } from '../models/user';
import { catchError } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {}

  signUp(userData: AuthUser) {
    return this.http.post(`${API_URL}/users`, userData).pipe(
      catchError((err) => {
          this.toastService.handleErrorToast(err)
          throw new Error(err.message)
      })
    ).subscribe(() => {
      this.toastService.handleSuccessToast('success')
    })
  }
}
