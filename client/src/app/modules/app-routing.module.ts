import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '@app/pages/about-page/about-page.component';
import { AdminPageComponent } from '@app/pages/admin-page/admin-page.component';
import { ForumPageComponent } from '@app/pages/forum-page/forum-page.component';
import { GamePageComponent } from '@app/pages/game-page/game-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { RecipesPageComponent } from '@app/pages/recipes-page/recipes-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'game', component: GamePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'recipes', component: RecipesPageComponent },
    { path: 'material', component: MaterialPageComponent },
    { path: 'forum', component: ForumPageComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
