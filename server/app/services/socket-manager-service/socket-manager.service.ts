import * as http from 'http';
import * as io from 'socket.io';

export class SocketManager {
    private sio: io.Server;
    private room: string = 'serverRoom';
    constructor(server: http.Server) {
        this.sio = new io.Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });
    }

    handleSockets(): void {
        this.sio.on('connection', (socket) => {
            // eslint-disable-next-line no-console
            console.log(`Connexion par l'utilisateur avec id : ${socket.id}`);

            // message initial
            socket.emit('hello', 'Hello World!');

            socket.on('message', (message: string) => {
                // eslint-disable-next-line no-console
                console.log(message);
            });
            socket.on('validate', (word: string) => {
                const isValid = word.length > 5;
                socket.emit('wordValidated', isValid);
            });

            socket.on('broadcastAll', (message: string) => {
                this.sio.sockets.emit('massMessage', `${socket.id} : ${message}`);
            });

            socket.on('joinRoom', () => {
                socket.join(this.room);
            });

            socket.on('roomMessage', (message: string) => {
                // Seulement un membre de la salle peut envoyer un message aux autres
                if (socket.rooms.has(this.room)) {
                    this.sio.to(this.room).emit('roomMessage', `${socket.id} : ${message}`);
                }
            });

            socket.on('disconnect', (reason) => {
                // eslint-disable-next-line no-console
                console.log(`Deconnexion par l'utilisateur avec id : ${socket.id}`);
                // eslint-disable-next-line no-console
                console.log(`Raison de deconnexion : ${reason}`);
            });
        });

        setInterval(() => {
            this.emitTime();
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 1000);
    }

    private emitTime() {
        this.sio.sockets.emit('clock', new Date().toLocaleTimeString());
    }
}
