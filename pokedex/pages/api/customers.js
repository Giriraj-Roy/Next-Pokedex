import details from "../../src/data"

export default async function handler(req, res) {
    const result = await details;
    res.json(result);   
}