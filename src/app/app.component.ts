import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es', 'fr']);
    // Set default language
    translate.setDefaultLang('es');
  }

  title = 'angular-ngx-translate-app';

  // Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
