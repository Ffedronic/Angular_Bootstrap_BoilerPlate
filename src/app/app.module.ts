import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthGard } from './auth/auth-gard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesResolverService } from './recipes/recipes.resolver.service';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.services';
import { DataStorageService } from './shared/dataStorage.service';
import { RecipeServices } from './recipes/recipes.services';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
