import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AddProductPromptComponent, AppComponent} from './app.component';
import {LoginComponent, RegisterPromptComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {RouterModule} from "@angular/router";
import {
  MatAutocompleteModule,
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ModelService} from "./services/model.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotificationService} from "./services/notification.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    RegisterPromptComponent,
    AddProductPromptComponent,
  ],
  entryComponents: [RegisterPromptComponent, AddProductPromptComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [ModelService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
