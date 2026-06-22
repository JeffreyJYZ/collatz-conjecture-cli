#!/usr/bin/env node

import chalk from "chalk";

const args = process.argv.slice(2);

if (!args[0]) {
	console.error(chalk.bold.redBright("Not enough arguments provided. Usage: `collatz-conj [number]`"));
	process.exit(1);
}

let n = parseInt(args[0], 10);

if (isNaN(n) || n <= 0) {
	console.error(chalk.bold.redBright("Error: Please provide a valid positive integer greater than 0."));
	process.exit(1);
}

let i = 0;
let maxNum = n;

console.log(chalk.dim("\n💡 Visual guide: ") + chalk.yellowBright("Yellow is Even") + " | " + chalk.blueBright.bold("Blue is Odd\n"));

console.log(chalk.whiteBright(`${n}\n`));

while (n !== 1) {
	if (n % 2 === 0) {
		n /= 2;
	} else {
		n = n * 3 + 1;
	}

	maxNum = Math.max(n, maxNum);

	const even = n % 2 === 0;
	console.log(even ? chalk.yellowBright(n) : chalk.bold.blueBright(n));

	i++;
}

console.log(
	chalk.bgGreen.black(`\n🎉 Reached 1 in ${i} steps! `) +
		`\n\nHighest number reached: ${chalk.bold.magentaBright(maxNum)}`,
);
