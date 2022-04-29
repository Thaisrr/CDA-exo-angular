import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './pages/librairy/library.component';
import { CardComponent } from './components/card/card.component';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ShowFormComponent } from './components/show-form/show-form.component';
import { NamePipe } from './utils/pipes/name.pipe';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    CardComponent,
    YesNoDialogComponent,
    ShowFormComponent,
    NamePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
