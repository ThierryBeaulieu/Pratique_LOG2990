import { Component } from '@angular/core';
import { MATERIAL_DEFAULT_PREBUILT_THEME } from '@app/enum/material-prebuilt-themes';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
    favoriteTheme: string = MATERIAL_DEFAULT_PREBUILT_THEME[0].value;
}
