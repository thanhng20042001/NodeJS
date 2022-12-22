const checkPrice = (req, res, next) => {
    const {price} = req.body;
    if(price >= 6000) {
        res.status(500).send("Giá sản phẩm phải nhỏ hơn 6000$")
    }
    else{
        next();
    }
}

const checkEmpty = (req, res, next) => {
    const {name, amount, price, sale} = req.body;
    if(name === "" || amount === "" || price === "" || sale === "") {
        res.status(500).send("Không được để trống bất kể trường nào")
    }
    else{
        next();
    }
}

module.exports = {
    checkPrice,
    checkEmpty
}