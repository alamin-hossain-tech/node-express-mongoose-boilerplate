export const addTodo = async (req, res) => {
  try {
    // todo post logic
  } catch (error) {
    // error handle
  }
};

export const getAllTodo = async (req, res) => {
  try {
    // todo get logic

    return res.json({ success: true, data: "todo data" });
  } catch (error) {
    // error handle
  }
};
