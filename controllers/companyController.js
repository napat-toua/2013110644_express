const Company = require('../models/company')

exports.index = async(req, res, next) => {

    const company = await Company.find().sort({_id:1})
    
    res.status(200).json({
        data: company
    })
}


exports.show = async(req, res, next) => {

    try{

        const { id } = req.params

        const company = await Company.findOne({
            _id: id /*req.params.id*/
        })

        if(!company){
            throw new Error('company not found')
        }
        else{
            res.status(200).json({
                data: company
            })
        }


    } catch ( error ){
        res.status(400).json({
            error: {
                message: 'error: ' + error.message
            }
        })
    }

}

exports.insert = async(req, res, next) => {

    const { name, address } = req.body

    let company = new Company({
        name: name,
        address : {
            province : address.province
        }
    });
    await company.save()

    res.status(200).json({
        message: name + ' data has added',
    })
}

exports.drop = async(req, res, next) => {

    try{

        const { id } = req.params

        const company = await Company.deleteOne({
            _id: id /*req.params.id*/
        })

        if (company.deletedCount === 0) {
            throw new Error(' can\'t delete data / company data not found')
        }
        else{
            res.status(200).json({
                message: 'data deleted'
            })
        }

    } catch ( error ){
        res.status(400).json({
            error: {
                message: 'error: ' + error.message
            }
        })
    }

}

exports.update = async(req, res, next) => {

    try{

        const { id } = req.params
        const { name, address } = req.body

        const company = await Company.updateOne({ _id : id }, {
            name: name,
            address : {
                province : address.province
        }
        })

        res.status(200).json({
            message: name + ' data has modified',
        })

    } catch ( error ){
        res.status(400).json({
            error: {
                message: 'error: ' + error.message
            }
        })
    }
}