module.exports = (numbers) => {
	const target = 24;
	const operations = ["+", "-", "*", "/"];

	for (const op1 of operations) {
		for (const op2 of operations) {
			for (const op3 of operations) {
				const expression = `(${numbers[0]} ${op1} ${numbers[1]}) ${op2} ${numbers[2]} ${op3} ${numbers[3]}`;
				// console.log(expression);
				const result = eval(expression);

				if (result === target) {
					return `สามารถใช้ ${op1}, ${op2}, ${op3} เพื่อทำให้ได้ผลลัพธ์ ${target} ด้วยเลข ${numbers.join(
						", "
					)} โดยการคำนวณเป็น ${expression}`;
				}
			}
		}
	}

	return "ไม่พบวิธีการทำให้ได้ผลลัพธ์เท่ากับ 24 ด้วยเลขที่ระบุ";
};
