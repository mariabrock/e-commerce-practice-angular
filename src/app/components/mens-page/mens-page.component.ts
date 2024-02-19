import { Component } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import { InitDetail } from "lightgallery/lg-events";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-mens-page',
  standalone: true,
  imports: [LightgalleryModule, NgForOf],
  templateUrl: './mens-page.component.html',
  styleUrl: './mens-page.component.scss'
})
export class MensPageComponent {

  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;
  }

  items = [
    {
      id: '1',
      size: '1400-933',
      src:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumb:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
            <p>Published on November 13, 2018</p>
        </div>`
    },
    {
      id: '2',
      size: '1400-933',
      src:
        'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      thumb:
        'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
            <p>Published on September 14, 2016</p>
        </div>`
    },
    {
      id: '3',
      size: '1400-932',
      src:
        'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
      thumb:
        'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      // subHtml: `<div class="lightGallery-captions">
      //       <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
      //       <p>Published on May 8, 2020</p>
      //   </div>`
    }
  ];

}
