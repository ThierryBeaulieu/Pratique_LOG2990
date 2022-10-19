import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
    selector: 'app-carrousel-menu',
    templateUrl: './carrousel-menu.component.html',
    styleUrls: ['./carrousel-menu.component.scss'],
})
export class CarrouselMenuComponent {
    @Output() notify = new EventEmitter();

    showBack2Recipes(): void {
        this.notify.emit('showBack2Recipes');
    }
    showNext2Recipes(): void {
        this.notify.emit('showNext2Recipes');
    }
}
