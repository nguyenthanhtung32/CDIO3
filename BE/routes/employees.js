const yup = require('yup');
const express = require('express');
const router = express.Router();
const { Employee } = require('../models');
const ObjectId = require('mongodb').ObjectId;
const { validateSchema } = require('../validation/index');

router.get('/', validateSchema(), async (req, res, next) => {
  try {
    let results = await Employee.lean({ virtuals: true });

    res.json({
      results,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error });
  }
});

router.get("/:id", validateSchema(), async (req, res, next) => {
  try {
    const { id } = req.params;

    let results = await Employee.findById(id).lean({ virtuals: true });

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
      fullName: yup.string().required(),
      email: yup.string().required(),
      phoneNumber: yup.string().required(),
      address: yup.string().required(),
      position: yup.string().required(),
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

router.delete('/:id', function (req, res, next) {
  const validationSchema = yup.object().shape({
    params: yup.object({
      id: yup.string().test('Validate ObjectID', '${path} is not valid ObjectID', (value) => {
        return ObjectId.isValid(value);
      }),
    }),
  });

  validationSchema
    .validate({ params: req.params }, { abortEarly: false })
    .then(async () => {
      try {
        const id = req.params.id;

        let found = await Employee.findByIdAndDelete(id);

        if (found) {
          return res.send({ ok: true, result: found });
        }

        return res.status(410).send({ ok: false, message: 'Object not found' });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    })
    .catch((err) => {
      return res.status(400).json({ type: err.name, errors: err.errors, message: err.message, provider: 'yup' });
    });
});

router.patch('/:id', async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    await Employee.findByIdAndUpdate(id, data);
    res.send({ ok: true, message: 'Updated' });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
});

module.exports = router;
