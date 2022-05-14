import details from "../../../src/data"

// GET -  /api/customers/[customerId]


export default /*async*/ function handler(req, res) {
    const {customerId} = req.query
    // const result = await details.id;
    const fruit = details.find( (fruit) => fruit.id === parseInt(customerId))
    res.status(200).json(fruit);
}