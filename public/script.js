const socket = io('/');

const userId = 1234;

socket.emit('join-room', ROOM_ID, userId);
socket.on('user-connected', userId => {
    console.log('userID=', userId);
})
