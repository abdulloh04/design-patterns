import CliTable3 from "cli-table3"

const table = new CliTable3({
	head: ['ID', 'Command', 'Title', 'Makefile'],
	colWidths: [4, 40, 30],
	style: {
		head: ['cyan'],
		border: ['grey'],
	},
})

table.push(
	[
		1,
		'npm start:factory-method',
		'Pattern Factory method',
		'make factory-method'
	],
	[
		2,
		'npm start:strategy',
		'Pattern Strategy',
		'make strategy'
	],
	[
		3,
		'npm start:singleton',
		'Pattern Singleton',
		'make singleton'
	]
)

console.log("👇 Please run this commands 👇")
console.table(table.toString())