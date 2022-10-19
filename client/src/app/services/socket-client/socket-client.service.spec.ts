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

    it('should disconnect', () => {
        const spy = spyOn(service.socket, 'disconnect');
        service.disconnect();
        expect(spy).toHaveBeenCalled();
    });

    it('isSocketAlive should return true if the socket is still connected', () => {
        service.socket.connected = true;
        expect(service.isSocketAlive()).toBeTruthy();
    });

    it('isSocketAlive should return false if the socket is no longer connected', () => {
        service.socket.connected = false;
        expect(service.isSocketAlive()).toBeFalsy();
    });

    it('isSocketAlive should return false if the socket is not defined', () => {
        (service.socket as unknown) = undefined;
        expect(service.isSocketAlive()).toBeFalsy();
    });

    it('should call socket.on with an event', () => {
        const event = 'hello world';
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const action = () => {};
        const spy = spyOn(service.socket, 'on');
        service.socket.on(event, action);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(event, action);
    });

    it('should call emit with data when using send', () => {
        const event = 'hello world';
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const action = () => {};
        const spy = spyOn(service.socket, 'emit');
        service.send(event, action);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(event, action);
    });

    it('should call emit without data when using send if data is undefined', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const event = 'hello world';
        const spy = spyOn(service.socket, 'emit');
        service.send(event);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(event);
    });
});
