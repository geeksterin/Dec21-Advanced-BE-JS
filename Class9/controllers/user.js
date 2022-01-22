var service = require('./../services/user')
var bcrypt = require('bcrypt')
module.exports = {
    helloUser: (req, res) => {
        res.status(200).send("Hey There")
    },
    registerUser: async (req, res) => {
        await service.createUser(req.body).then(([data, fields]) =>{
            if (data.affectedRows == 1) {
                res.status(201).send({"message": "User registered successsfully"})       
            } else {
                res.status(422).send({"message": "Some error occured while saving data"})
            }
        }).catch((e)=>{
            res.status(404).send({"error":e.message})
        })
    },
    loginUser: async(req,res)=>{
        await service.getUser(req.body.username).then(async ([data,fields]) => {
            console.log(data[0].username)
                var db_password = (data[0].password)
                var password = req.body.password
                var if_password_valid = await bcrypt.compare(password, db_password)
                if(if_password_valid) {
                    res.status(200).send({"message":"Successfully logged in"})
                } else {
                    res.status(400).send({"message":"Incorrect Password"})
                }

        }).catch((e)=>{
            res.status(422).send({"error": e})
        })
        // Cookies and session
        // verfiy user(get user from user db and check if user id is correct, verify password)
        // var user = getUser(username)
        // var user_id = 12
        // var session = req.session;
        // console.log(session)
        // session.user_id = user_id
        // console.log(session)
        // res.setHeader("session", session.user_id)
        // res.status(200).send({"session":req.session,"message": "User logged in successfully"})
    },
    logoutUser: (req,res) => {
        req.session.destroy()
        console.log(req.session)
        res.redirect('http://127.0.0.1:3001/')
    }
}