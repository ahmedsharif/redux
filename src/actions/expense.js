import uuid from "uuid";

// action dispatcher
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// remove expense
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// edit expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export { addExpense, removeExpense, editExpense };
