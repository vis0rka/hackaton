const incomseServie = require("../services/income.services");

const postIncome = (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount) {
    res.status(400).json({
      status: "error",
      message: "Missing data!"
    });
  } else {
    incomseServie
      .addNewIncome(userId, amount)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const updateIncome = (req, res) => {
  const { incomeId, amount } = req.body;
  if (!incomeId || !amount) {
    res.status(400).json({
      status: "error",
      message: "Missing data!"
    });
  } else {
    incomseServie
      .updateIncome(incomeId, amount)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const deleteIncome = (req, res) => {
  const { userId, incomeId } = req.body;
  if (!userId || !incomeId) {
    res.status(400).json({
      status: "error",
      message: "Missing data!"
    });
  } else {
    incomseServie
      .deleteIncome(userId, incomeId)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

const getAllIncome = (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({
      status: "error",
      message: "Missing data!"
    });
  } else {
    incomseServie
      .getAllIncome(userId)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  }
};

module.exports = {
  postIncome,
  updateIncome,
  deleteIncome,
  getAllIncome
};
