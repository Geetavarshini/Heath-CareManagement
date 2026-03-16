import exp from "express"
import { Doctor } from "../Models/doctorModel"

export const doctorRoute=exp.Router()

// CREATE DOCTOR
doctorRoute.post("/", verifyToken, checkRole("admin"), async (req, res, next) => {
  try {
    const newDoctor = new Doctor(req.body);

    const savedDoctor = await newDoctor.save();

    res.status(201).json({
      message: "Doctor created successfully",
      payload: savedDoctor
    });

  } catch (err) {
    next(err);
  }
});


// GET ALL DOCTORS
doctorRoute.get("/", async (req, res, next) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
      message: "Doctors fetched successfully",
      payload: doctors
    });

  } catch (err) {
    next(err);
  }
});


// GET DOCTOR BY ID
doctorRoute.get("/:id", async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found"
      });
    }

    res.status(200).json({
      message: "Doctor fetched successfully",
      payload: doctor
    });

  } catch (err) {
    next(err);
  }
});


// UPDATE DOCTOR
doctorRoute.put("/:id", verifyToken, checkRole("admin"), async (req, res, next) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({
        message: "Doctor not found"
      });
    }

    res.status(200).json({
      message: "Doctor updated successfully",
      payload: updatedDoctor
    });

  } catch (err) {
    next(err);
  }
});


// DELETE DOCTOR
doctorRoute.delete("/:id", verifyToken, checkRole("admin"), async (req, res, next) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!deletedDoctor) {
      return res.status(404).json({
        message: "Doctor not found"
      });
    }

    res.status(200).json({
      message: "Doctor deleted successfully"
    });

  } catch (err) {
    next(err);
  }
});


// SEARCH DOCTOR BY NAME OR SPECIALIZATION
doctorRoute.get("/search/filter", async (req, res, next) => {
  try {
    const { name, specialization } = req.query;

    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (specialization) {
      filter.specialization = { $regex: specialization, $options: "i" };
    }

    const doctors = await Doctor.find(filter);

    res.status(200).json({
      message: "Search results",
      payload: doctors
    });

  } catch (err) {
    next(err);
  }
});


// GET DOCTORS BY SPECIALIZATION
doctorRoute.get("/specialization/:type", async (req, res, next) => {
  try {
    const doctors = await Doctor.find({
      specialization: req.params.type
    });

    res.status(200).json({
      message: "Doctors fetched successfully",
      payload: doctors
    });

  } catch (err) {
    next(err);
  }
});


export { doctorRoute };