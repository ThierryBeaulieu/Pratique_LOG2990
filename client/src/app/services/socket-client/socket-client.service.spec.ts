import { TestBed } from '@angular/core/testing';
import { SocketTestHelper } from '@app/classes/socket-client-helper/socket-client.helper';
import { Socket } from 'socket.io-client';

import { SocketClientService } from './socket-client.service';

describe('SocketClientService', () => {
    let service: SocketClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SocketClientService);
        // eslint-disable-next-line prettier/prettier
        service.socket = (new (SocketTestHelper) as unknown) as Socket;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
