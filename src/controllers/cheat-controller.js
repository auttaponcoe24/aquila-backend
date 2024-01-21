const prisma = require("../models/prisma");
const cheat24 = require("../calculateCheat");

exports.addNumber = async (req, res, next) => {
	try {
		const { number } = req.query;

		const numbers = await prisma.number.findFirst({
			where: {
				number: number,
			},
		});

		if (!numbers) {
			const numbers = number.split("");
			const calculate = cheat24(numbers);

			const newNumber = await prisma.number.create({
				data: {
					number: number,
				},
			});
			const newResult = await prisma.calculation.create({
				data: {
					result: calculate,
					numberId: newNumber.id,
				},
			});
			res.status(201).json({
				message: "newResult",
				newNumber,
				newResult,
			});
		} else {
			const result = await prisma.calculation.findFirst({
				where: {
					numberId: numbers.id,
				},
			});
			res.status(200).json({ message: "result", numbers, result });
		}
	} catch (err) {
		next(err);
	}
};
