import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SharedModule } from './shared/shared.module';
import { SelectColorComponent } from './select-color/select-color.component';
import { RequestProfilerService } from './request-profiler.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SelectColorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestProfilerService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
