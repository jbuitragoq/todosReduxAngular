import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './components/todos/todos.module';
import { SharedModule } from './shared/shared.module';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TodosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
