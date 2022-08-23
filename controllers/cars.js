import Car from "../models/Car.js";

// Add Car
export const createCar = async (req, res, next) => {
  const newCar = new Car(req.body);
  try {
    const savedCar = await newCar.save();
    res.status(200).json(savedCar);
  } catch (err) {
    next(err);
  }
};
// Update a Car
export const updateCar = async (req, res, next) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCar);
  } catch (err) {
    next(err);
  }
};
// Delete a Car
export const deleteCar = async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json("Car Deleted");
  } catch (err) {
    next(err);
  }
};
// Get a Car
export const getCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};
// Get Car by location
export const getAllCar = async (req, res, next) => {
  console.log(req.query);
  try {
    const car = await Car.find({ location: req.query.location });
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};
