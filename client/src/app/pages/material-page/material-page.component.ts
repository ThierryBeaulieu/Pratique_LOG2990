import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MATERIAL_DEFAULT_PREBUILT_THEME } from '@app/enum/material-prebuilt-themes';
@Component({
    selector: 'app-material-page',
    templateUrl: './material-page.component.html',
    styleUrls: ['./material-page.component.scss'],
})
export class MaterialPageComponent {
    @ViewChild('merciDialogContent')
    private readonly merciDialogContentRef: TemplateRef<HTMLElement>;

    readonly themes = MATERIAL_DEFAULT_PREBUILT_THEME;

    favoriteTheme: string = MATERIAL_DEFAULT_PREBUILT_THEME[0].value;

    constructor(private readonly matDialog: MatDialog) {}

    onLikeTheme (): void {
        this.matDialog.open(this.merciDialogContentRef);
    }
}
