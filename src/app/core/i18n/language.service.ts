import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export type SupportedLanguage = 'fr' | 'en';

@Service()
export class LanguageService {
  private readonly transloco = inject(TranslocoService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  public static readonly storageKey = 'jf-portfolio.language';
  public static readonly langQueryParam = 'lang';

  readonly language = signal<SupportedLanguage>(this.getInitialLanguage());

  constructor() {
    this.applyLanguage(this.language());
  }

  setLanguage(language: SupportedLanguage): void {
    this.language.set(language);
    this.applyLanguage(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(LanguageService.storageKey, language);
      this.syncUrl(language);
    }
  }

  toggle(): void {
    this.setLanguage(this.language() === 'fr' ? 'en' : 'fr');
  }

  private applyLanguage(language: SupportedLanguage): void {
    this.transloco.setActiveLang(language);
    this.document.documentElement.lang = language;
  }

  private getInitialLanguage(): SupportedLanguage {
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    const fromUrl = this.getLanguageFromUrl();
    if (fromUrl) {
      return fromUrl;
    }

    const storedLanguage = localStorage.getItem(LanguageService.storageKey);
    if (storedLanguage === 'fr' || storedLanguage === 'en') {
      return storedLanguage;
    }

    return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  private getLanguageFromUrl(): SupportedLanguage | null {
    const params = new URLSearchParams(this.document.location.search);
    const value = params.get(LanguageService.langQueryParam);
    return value === 'fr' || value === 'en' ? value : null;
  }

  private syncUrl(language: SupportedLanguage): void {
    const url = new URL(this.document.location.href);
    url.searchParams.set(LanguageService.langQueryParam, language);
    window.history.replaceState({}, '', url);
  }
}
