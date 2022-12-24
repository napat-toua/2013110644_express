const Shop = require('../models/shop')
const Menu = require('../models/menu')

exports.index = async(req, res, next) => {

    const shops = await Shop.find().select('name photo location').sort({_id:-1})

    const shopWithPhotodomain = shops.map((shop, index)=>{
        return {
            id: shop._id,
            name: shop.name,
            photo: 'http://localhost:3000/images/' + shop.photo, 
            location: shop.location
        }
    })
    
    res.status(200).json({
        data: shopWithPhotodomain
    })
}

exports.menu = async(req, res, next) => {

    //const menu = await Menu.find().select('+name -price')
    const menu = await Menu.find().populate('shop')
        
    res.status(200).json({
        data: menu
    })
}

exports.show = async(req, res, next) => {

    try{

        const { id } = req.params

        const shops = await Shop.findOne({
            _id: id
        }).populate('menus')

        const shopWithPhotodomain = {
                id: shops._id,
                name: shops.name,
                photo: 'http://localhost:3000/images/' + shops.photo, 
                location: shops.location,
                menus: shops.menus
            }
        

        if(!shops){
            throw new Error('staff not found')
        }
        else{
            res.status(200).json({
                data: shopWithPhotodomain
            })
        }


    } catch ( error ){
        res.status(400).json({
            error: {
                message: 'error: ' + error.message
            }
        })
    }
    /*const shopWithPhotodomain = shops.map((shop, index)=>{
        return {
            id: shop._id,
            name: shop.name,
            location: 'http://localhost:3000/images/' + shop.photo, 
            location: shop.location
        }
    })
    
    res.status(200).json({
        data: shopWithPhotodomain
    })*/
}