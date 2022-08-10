const WeightModel = require("../models/weightModel");

class WeightController {
	// Create new weight data
	static async createNewWeight(req, res) {
		try {
			const body = req.body
			let weight_data = {
				tanggal: body.tanggal,
				min: body.min,
				max: body.max,
				perbedaan: body.max-body.min,
			}
			const crud = new WeightModel(weight_data);
			const saved = await crud.save();
			res.status(201).json({
				message: "New weight data added",
				data: saved
			});
		} catch (error) {
			res.status(500).send({ err: error });
		}
	}

	// Show all weight data
	static async getAllWeight(req, res) {
		try {
		  const weightList = await WeightModel.find();
		  res.status(200).send(weightList);
		} catch (error) {
		  res.status(500).send({ err: error });
		}
	}

	// Show a particular weight detail by Id
	static async getAllWeightByID(req, res) {
		try {
			const id = req.params.id;
			const userList = await WeightModel.findOne({
				_id: id,
			});
			res.status(200).send(userList);
		} catch (error) {
			res.status(500).send({ err: error });
		}
	};

	// Update weight detail by Id
	static async updateWeightById(req, res) {
		try {
		WeightModel.findByIdAndUpdate(req.params.id, req.body)
			.then(function () {
				res.json("WeightModel updated");
			})
			.catch(function (err) {
				res.status(422).send("WeightModel update failed.");
			});
		} catch (error) {
			res.status(500).send({ err: error });
		}
	};

	// Delete weight by Id
	static async deleteWeightById(req, res) {
		WeightModel.findById(req.params.id, function (err, crud) {
			if (!crud) {
				res.status(404).send("WeightModel not found");
			} else {
				WeightModel.findByIdAndRemove(req.params.id)
					.then(function () {
						res.status(200).json("WeightModel deleted");
					})
					.catch(function (err) {
						res.status(400).send("WeightModel delete failed.");
					});
			}
		});
	};
}

module.exports = WeightController;