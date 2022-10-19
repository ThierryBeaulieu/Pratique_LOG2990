import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from '@app/components/navigation-bar/navigation-bar.component';
import { PlayAreaComponent } from '@app/components/play-area/play-area.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AboutPageComponent } from '@app/pages/about-page/about-page.component';
import { AppComponent } from '@app/pages/app/app.component';
import { GamePageComponent } from '@app/pages/game-page/game-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { CarrouselMenuComponent } from './components/carrousel-menu/carrousel-menu.component';
import { AdminToolBarComponent } from './components/admin-tool-bar/admin-tool-bar.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [
        AppComponent,
        GamePageComponent,
        MainPageComponent,
        MaterialPageComponent,
        PlayAreaComponent,
        SidebarComponent,
        NavigationBarComponent,
        AboutPageComponent,
        RecipesPageComponent,
        ForumPageComponent,
        AdminPageComponent,
        RecipeCardComponent,
        CarrouselMenuComponent,
        AdminToolBarComponent,
        RecipeFormComponent,
    ],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
