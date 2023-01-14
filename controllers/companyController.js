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
            const error = new Error("Error: Company ID not found")
            error.statusCode = 400
            throw error;
        }
        else{
            res.status(200).json({
                data: company
            })
        }


    } catch ( error ){
        next( error )
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
            const error = new Error("Error: Can\'t delete data / Company data not found.")
            error.statusCode = 400
            throw error;
        }
        
        res.status(200).json({
            message: 'Data deleted'
        })
        

    } catch ( error ){
        next( error )
    }

}

exports.update = async(req, res, next) => {

    try{

        const { id } = req.params
        const { name, address } = req.body

        const existId = await Company.findOne({ _id : id })

        if (!existId){
            const error = new Error("Error: Company ID not found.")
            error.statusCode = 400
            throw error;
        }

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
        next( error )
    }
}