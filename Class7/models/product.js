//metadata, transformation of data before fetching or storing


var schema = joi.object().keys({
    name: joi.string().min(3).max(20).required(),
    info: joi.string().max(200),
    // reviews: joi.array().items({
    //     id: joi.string().required(),
    //     desc: joi.string().max(200).required()
    // })
    reviews: joi.alternatives.try(
        joi.array().items({
                id: joi.string().required(),
                desc: joi.string().max(200).required()
            }), joi.object().keys({
                id: joi.string().required(),
                desc: joi.string().max(200).required()
            })
    )
})

module.exports = schema

// [{'id':'1','desc': 'good'}, {'id':'2','desc': 'best taste'} ]