import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-carrousel-menu',
    templateUrl: './carrousel-menu.component.html',
    styleUrls: ['./carrousel-menu.component.scss'],
})
export class CarrouselMenuComponent {
    @Output() notify = new EventEmitter<string>();

    showBack2Recipes(): void {
        this.notify.emit('showBack2Recipes');
    }
    showNext2Recipes(): void {
        this.notify.emit('showNext2Recipes');
    }
}
