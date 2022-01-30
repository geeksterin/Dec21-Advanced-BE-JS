var events = require('events')
var EventEmitter = new events.EventEmitter()

// var EventEmitter1 = new events.EventEmitter('http://127.0.0.1:5000')

//listener == server
EventEmitter.on('channel',(data)=>{
    console.log("1Data from sender" + data)

})

// EventEmitter.on('channel1',(data)=>{
//     console.log("2Data from sender" + data)
// })

// EventEmitter.on('channel',(data)=>{
//     console.log("3Data from sender" + data)
// })
// EventEmitter.on('connection',()=>{
//     console.log("random id")
//     EventEmitter.on('channel',(data)=>{
//         console.log("1Data from sender" + data)
//     })
    
//     EventEmitter.on('channel1',(data)=>{
//         console.log("2Data from sender" + data)
//     })
    
//     EventEmitter.on('channel',(data)=>{
//         console.log("3Data from sender" + data)
//     })
// })
// EventEmitter.on('disconnect', ()=>{
//     //
// })

// global.supports = [{}]
// global.users = [{}]
// global.rooms = [{}]


// validateUser(req, res, next) {
//     req.user = user;
//     next()
// }
// EventEmitter.on('createRoom',params, ()=>{
//     EventEmitter.addListener('roomparams',()=>{
//         rooms.push("room"+params)
//     })
//     return params
// })

// conenctToSupport() {
//     var available = findAvailableSupport
//     var room_name = EventEmitter.emit('createRoom', [req.user, available])
//     EventEmitter1.emit('newCustomer', room_name)
// }

// app.get('connectToSupport', validateUser, conenctToSupport)
//handler == client == emiter
EventEmitter.emit('channel', ()=>{
    console.log(
        "Emitting to channel"
    )
})
// EventEmitter.emit('channel1')
// EventEmitter.emit('channel','sending data2')
// EventEmitter.emit('channel','sending data3')
// EventEmitter.emit('channel','sending data4')

