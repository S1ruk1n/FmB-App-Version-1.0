const getBanken = "SELECT * FROM banken_db";
const getBankenById = "SELECT * FROM banken_db WHERE id = $1 ";
const checkNameExists = "SELECT s FROM banken_db s WHERE s.name = $1";
const addBanken = "INSERT INTO banken_db (id, bank, name, sitz, land, verband) VALUES ($1, $2, $3, $4, $5, $6)";
const removeBanken = "DELETE FROM banken_db WHERE id = $1"; 
const updateBanken = "UPDATE banken_db SET name = $1 WHERE id = $2";


module.exports = {
    getBanken,
    getBankenById,
    checkNameExists,
    addBanken,
    removeBanken,
    updateBanken,
}