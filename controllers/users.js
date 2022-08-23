import User from "../models/User.js";

// Update a User
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
// Delete a User
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted");
  } catch (err) {
    next(err);
  }
};
// Get a User
export const getUser = async (req, res, next) => {
  try {
    const user = awaitUser.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
// Get All User
export const getAllUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
