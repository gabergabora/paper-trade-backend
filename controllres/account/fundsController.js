const Funds = require('../../models/Funds.js');

const getFunds = async (req, res) => {

    const { email } = req;

    const fundsData = await Funds.findOne({ email: email }).exec();

    if (!fundsData) {
        return res.status(403).json({ message: `No funds details found with email: ${email}` });
    }

    return res.status(201).json({ fundsData });

}

const updateFunds = async (req, res) => {

    const { email } = req;
    const { amount, transaction_type } = req.body;

    const fundsData = await Funds.findOne({ email: email }).exec()

    if (!fundsData) {
        return res.status(403).json({ message: `No funds details found with email: ${email}` });
    }

    switch (transaction_type) {
        case 'DR':
            fundsData.fundsInfo.available_funds = fundsData.available_funds - amount;
            await fundsData.save().catch(err => {
                res.status(500).json({ message: 'INTERNAL_SERVER_ERROR', error: err })
                console.error(err);
            })

            break;
        case 'CR':
            fundsData.fundsInfo.available_funds = fundsData.fundsInfo.available_funds + amount;
            await fundsData.save().catch(err => {
                res.status(500).json({ message: 'INTERNAL_SERVER_ERROR', error: err })
                console.error(err);
            })
            break;
        case 'MARGIN_UPDATE':
            fundsData.fundsInfo.margin_allowed = amount;
            await fundsData.save().catch(err => {
                res.status(500).json({ message: 'INTERNAL_SERVER_ERROR', error: err })
                console.error(err);
            })
            break;
        case 'LIEN_AMOUNT':
            fundsData.fundsInfo.lien_amount = amount;
            await fundsData.save().catch(err => {
                res.status(500).json({ message: 'INTERNAL_SERVER_ERROR', error: err })
                console.error(err);
            })
            break;
        default:
            res.status(400).json({ message: 'BAD_REQUEST' })
            console.error('No cases matched to update the funds. Incomplete of badly formatted information provided');
            break;

    }


}

module.exports = { getFunds, updateFunds }