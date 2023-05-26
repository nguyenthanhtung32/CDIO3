const yup = require("yup");
const express = require("express");
const router = express.Router();
const { Trip } = require("../models");
const ObjectId = require("mongodb").ObjectId;
const { validateSchema } = require("../validation/index")

router.get("/", async (req, res, next) => {
  try {
    let results = await Trip.find();
    res.json({
      results
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ ok: false, error });
  }
});

router.get("/:id", validateSchema(), async (req, res, next) => {
  try {
    const { id } = req.params;

    let results = await Trip.findById(id).lean({ virtuals: true });

    if (results) {
      return res.send({ ok: true, result: results });
    }

    return res.send({ ok: false, message: "Object not found" });
  } catch (err) {
    return res.status(400).json({ type: err.name, errors: err.errors, message: err.message, provider: 'yup' });
  }
});

router.post("/", async function (req, res, next) {
  const validationSchema = yup.object({
    body: yup.object({
      start: yup.string().required(),
      end: yup.string().required(),
      departureDay: yup.string().required(),
      arrivalDate: yup.string().required(),
      time: yup.string().required(),
    }),
  });

  validationSchema
    .validate({ body: req.body }, { abortEarly: false })
    .then(async () => {
      try {
        const data = req.body;
        const newItem = new Trip(data);
        let result = await newItem.save();

        return res.send({ ok: true, message: "Created", result });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ type: err.name, errors: err.errors, provider: "yup" });
    });
});

router.delete("/:id", function (req, res, next) {
  const validationSchema = yup.object().shape({
    params: yup.object({
      id: yup.string().test("Validate ObjectID", "${path} is not valid ObjectID", (value) => {
        return ObjectId.isValid(value);
      }),
    }),
  });

  validationSchema
    .validate({ params: req.params }, { abortEarly: false })
    .then(async () => {
      try {
        const id = req.params.id;

        let found = await Trip.findByIdAndDelete(id);

        if (found) {
          return res.send({ ok: true, result: found });
        }

        return res.status(410).send({ ok: false, message: "Object not found" });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    })
    .catch((err) => {
      return res
        .status(400)
        .json({
          type: err.name,
          errors: err.errors,
          message: err.message,
          provider: "yup",
        });
    });
});

router.patch("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const patchData = req.body;
    await Trip.findByIdAndUpdate(id, patchData);

    res.send({ ok: true, message: "Updated" });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
});

module.exports = router;
