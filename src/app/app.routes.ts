import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const ROUTES: Routes=[
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: UserComponent }
]


export { ROUTES };