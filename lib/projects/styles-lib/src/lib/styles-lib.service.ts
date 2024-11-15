import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StylesLibService {
  private static readonly elementId = 'global-styles';

  async ensureStyles() {
    return new Promise<boolean>((resolve) => {
      if (document.getElementById(StylesLibService.elementId)) {
        console.log('StylesLibService: Global styles are already registered.');
        resolve(false);
        return;
      }

      console.log('StylesLibService: Will register global styles.');

      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.id = StylesLibService.elementId;
      link.href = `${this.getOrigin()}/styles/global-styles.css`;
      link.onload = () => {
        // we resolve only AFTER the css is loaded
        resolve(true);
      };

      document.head.appendChild(link);
    });
  }

  private getOrigin() {
    const currentScriptSrc = (document.currentScript as any)?.src;
    return currentScriptSrc ? new URL(currentScriptSrc) : location.origin;
  }
}
