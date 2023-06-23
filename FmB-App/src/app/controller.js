const pool = require('./db')
const queries = require('./queries');

const getBanken = (req, res)=>{
    pool.query(queries.getBanken, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

const getBankenById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBankenById, [id],(error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addBanken = (req, res) => {
    const {id, bank, name, sitz, land, verband } = req.body;
    // check if name exists
    pool.query(queries.checkNameExists, [name], (error, results) =>{
        if (results.rows.length) {
            res.send("Name already exists.");
        }

        //add bank to db
        pool.query(queries.addBanken, [id, bank, name, sitz, land, verband], (error, results) => {
            if (error) throw error;
            res.status(201).send("Bank Created Succesfully!");
        });
    });
};


const removeBanken = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getBankenById, [id], (error, results) => {
        const noBankFound = !results.rows.length;
        if(noBankFound){
        res.send("Banken does not exist in the database, could not remove.")
        }

        pool.query(queries.removeBanken, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Bank removed Succesfully");
        });
    });
}


const updateBanken = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getBankenById, [id], (error, results) => {
        const noBankFound = !results.rows.length;
        if (noBankFound) {
            res.send("Banken does not exist in the database")
        }

        pool.query(queries.updateBanken, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Bank updated succesfully")
        });
    }
)};



module.exports = {
    getBanken,
    getBankenById,
    addBanken,
    removeBanken,
    updateBanken,
    
};