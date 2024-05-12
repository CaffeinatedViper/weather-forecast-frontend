import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean = false;
  private clickSound = new Audio('assets/mode_click.wav');

  toggleTheme(): void {
    this.clickSound.play();
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
