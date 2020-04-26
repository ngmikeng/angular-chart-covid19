import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppSettingsService, LIST_LANG, DEFAULT_LANG } from './shared/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private appSettingsService: AppSettingsService
  ) {
    const langIds = LIST_LANG.map(item => item.id);
    translate.addLangs(langIds);
    translate.setDefaultLang(DEFAULT_LANG);
  }

  ngOnInit(): void {
    this.appSettingsService.getLanguage().subscribe((lang) => {
      this.translate.use(lang);
    });
  }
}
