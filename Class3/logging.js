//exports.logThis = 
const log = require('log')
function logThis(content) {
    // console.log(module.id)
    // console.log(module)
    console.log(content+" there");
    return content+" Kanika"
}

function logError(error) {
    console.error("Error received as "+ error)
}


module.exports = {
    info: function logThis(content) {
        // console.log(module.id)
        // console.log(module)
        console.log(Time.now + "::" + content+" there");
        // return content+" Kanika"
    },
    error: function logError(error) {
        console.error("Error received as "+ error)
    }
}
// module.exports = {
//     info: logThis,
//     error: logError
// }
// module.exports = logThis
// module.exports
// exports.logThis = logThis