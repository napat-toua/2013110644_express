exports.index = (req, res, next) => {
    res.status(200).json({
        data: [
            {
                id: '001',
                name: 'C.S.I. Group',
                address: {
                    province: 'Bangkok',
                    postcode: '10500'
                }
            },
            {
                id: '002',
                name: 'Techno Brave Asia Ltd.',
                address: {
                    province: 'Bangkok',
                    postcode: '10400'
                }
            },
            {
                id: '003',
                name: 'Microsoft (Thailand)',
                address: {
                    province: 'Bangkok',
                    postcode: '10330'
                }
            }

        ]
    })
}