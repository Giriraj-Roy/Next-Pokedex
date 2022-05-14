import details from "../../src/data"

// GET -  /api/customers

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const result = await details;
        res.json(result);
    }
    else if(req.method === 'POST'){
        const fruit = req.body.fruit
        const newFruit = {
            "id" : Date.now(),
            "name": fruit,
            "category": "Fruit #00"
        }
    }
    details.push(newFruit)
    res.status(201).json(newFruit);
}

