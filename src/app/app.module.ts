import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Components/main.module').then(m => m.MainModule)
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./Components/Authentication/auth.module').then(m => m.AuthModule)
  // }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
