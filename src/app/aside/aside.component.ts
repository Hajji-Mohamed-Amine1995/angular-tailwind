import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {heroUsers} from '@ng-icons/heroicons/outline';
import {bootstrapArrowRight,bootstrapArrowLeft} from "@ng-icons/bootstrap-icons"
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIcon
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  providers: [provideIcons({ heroUsers,bootstrapArrowRight,bootstrapArrowLeft })],
})
export class AsideComponent {
  isShown:boolean = false;
  setIsShown(){
    this.isShown = !this.isShown
  }
}
