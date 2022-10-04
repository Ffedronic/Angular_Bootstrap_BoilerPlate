import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGard } from './auth/auth-gard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthService } from './auth/auth.service';
import { RecipesResolverService } from './recipes/recipes.resolver.service';
import { RecipeServices } from './recipes/recipes.services';
import { DataStorageService } from './shared/dataStorage.service';
import { ShoppingListService } from './shopping-list/shopping-list.services';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeServices,
    DataStorageService,
    RecipesResolverService,
    AuthService,
    AuthGard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
