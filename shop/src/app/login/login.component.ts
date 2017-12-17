import {Component} from "@angular/core";
import {LoginFailedError, ModelService} from "../services/model.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = "";
  password: string = "";

  constructor(private modelService: ModelService, private notificationService: NotificationService,
              private router: Router, private dialog: MatDialog) {}

  async authorize() {
    try {
      await this.modelService.login(this.login, this.password);
      await this.completeAuthorization();
    } catch (error) {
      if (error instanceof LoginFailedError) {
        await this.tryToRegister();
      } else {
        this.notificationService.notify(error.message);
      }
    }
  }

  private async tryToRegister() {
    const dialog: MatDialogRef<RegisterPromptComponent> = this.dialog.open(RegisterPromptComponent);
    const tryToRegister = await dialog.afterClosed().toPromise();
    if (tryToRegister === true) {
      try {
        await this.modelService.register(this.login, this.password);
        await this.authorize();
      } catch (error) {
        this.notificationService.notify(error.message);
      }
    }
  }

  private async completeAuthorization() {
    this.notificationService.notify(`Welcome, ${this.modelService.currentUser.login}`);
    await this.router.navigateByUrl('/');
  }
}

@Component({
  selector: 'app-register-prompt',
  templateUrl: './register.prompt.component.html'
})
export class RegisterPromptComponent {
  constructor(private dialog: MatDialogRef<RegisterPromptComponent>) {}

  close(result: boolean) {
    this.dialog.close(result);
  }
}
