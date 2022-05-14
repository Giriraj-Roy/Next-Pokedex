import details from "../../../src/data"

export default function handler(req, res) {
    const {customerId} = req.query
    // const result = await details.id;
    const fruit = details.find( (fruit) => fruit.id === parseInt(customerId))
    res.status(200).json(fruit);
}