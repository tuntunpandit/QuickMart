import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthGuard } from './Guards/auth.guard';
import { MainGuard } from './Guards/main.guard';
import { StrengthPipe } from './Pipes/strength.pipe';

const routes: Routes = [
  {
    path: '',
    canActivate: [MainGuard],
    loadChildren: () =>
      import('./Components/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./Components/Authentication/auth.module').then(
        (m) => m.AuthModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, StrengthPipe],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
