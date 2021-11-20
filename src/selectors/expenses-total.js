export default (expenses) => {
  return expenses.map((expense) => expense.ammount)
      .reduce((sum, value) => sum + value, 0);
};
