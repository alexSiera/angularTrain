import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BetterHightlightDirective } from './better-hightlight/better-hightlight.directive';
import { BestHightlightDirective } from './best-hightlight/best-hightlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHightlightDirective,
    BestHightlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
