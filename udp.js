import * as dgram from 'dgram';

const controller = new AbortController();
const {signal} = controller;
const socket = dgram.createSocket({type: 'udp4', signal});
// socket.on()
socket.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
socket.bind(8081);

/*Instruction to setup netcat client on windows
1. Download a nmap setup file https://nmap.org/dist/
2. install
3. restart command prompt with admin rights
4. ncat -u <serverip> <serverport>
5. Then whatever is typed after that is send to the server
*/
