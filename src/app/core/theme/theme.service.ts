import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject, signal } from '@angular/core';

export type SupportedTheme = 'dark' | 'light';

/** Couleur de la barre d'adresse mobile, alignée sur --ink-950. */
const THEME_COLOR: Record<SupportedTheme, string> = {
  dark: '#0a0f0c',
  light: '#f4f7f5',
};

@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  public static readonly storageKey = 'jf-portfolio.theme';

  readonly theme = signal<SupportedTheme>(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  setTheme(theme: SupportedTheme): void {
    this.theme.set(theme);
    this.applyTheme(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(ThemeService.storageKey, theme);
    }
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: SupportedTheme): void {
    // setAttribute plutôt que dataset : le DOM du rendu serveur n'expose pas dataset.
    this.document.documentElement.setAttribute('data-theme', theme);
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme]);
  }

  /** Le rendu serveur sort en sombre ; le script inline de index.html
   *  réaligne le document avant peinture pour éviter le flash. */
  private getInitialTheme(): SupportedTheme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }

    const stored = localStorage.getItem(ThemeService.storageKey);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }
}
