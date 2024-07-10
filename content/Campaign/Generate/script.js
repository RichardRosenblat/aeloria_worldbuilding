const rychScript = (
	genOptions,
	numberOfLastNames,
	makeFirstLetterUppercase,
	specialTreatment = "none",
	numberOfNamesToGenerate = 100
) => {
	const specialTreatments = {
		none: [],
		"sqe": {
			loops: (numberOfNamesToGenerate * 2) / 10,
			preTreatment: (arrayOfNames) =>
				arrayOfNames.reduce((acc, name, i) => {
					if ([1, 3, 5, 7, 9].includes(i)) {
						const parenthesisPattern = /\([\w\/\'\’\-\s]+\)/g;
						const parenthesisPatternReplacement = /\) \+ \(/g;
						acc[acc.length - 1] += name
							.match(parenthesisPattern)
							.join(" + ")
							.replace(parenthesisPatternReplacement, " + ");
					} else {
						acc.push(name);
					}
					return acc;
				}, []),
		},
		"lnf": {
			preTreatment: (arrayOfNames) => {
				return arrayOfNames.map((name) => (name ? name.split(" ").reverse().join(" ") : name));
			},
		},
	};

	const numberToOrdinalWords = (n) => {
		const ordinalWords = [
			"Zeroth",
			"First",
			"Second",
			"Third",
			"Fourth",
			"Fifth",
			"Sixth",
			"Seventh",
			"Eighth",
			"Ninth",
			"Tenth",
		];

		if (n < 0 || n > 10) {
			const s = ["th", "st", "nd", "rd"];
			const v = n % 100;
			return n + (s[(v - 20) % 10] || s[v] || s[0]);
		}

		return ordinalWords[n];
	};
	const generateNames = (genType) => {
		const result = [];

		const {
			loops = numberOfNamesToGenerate / 10,
			preTreatment = (e) => e,
			postTreatment = (e) => e,
		} = specialTreatments[specialTreatment];

		for (let i = 0; i < loops; i++) {
			nameGen(genType);
			const resultHTMLArray = document.getElementById("result").innerHTML.split("<br>").filter(Boolean);
			const arrayOfNames = preTreatment(
				makeFirstLetterUppercase
					? resultHTMLArray.map((name) =>
							name
								? name
										.split(" ")
										.map((word) => word[0].toUpperCase() + word.slice(1))
										.join(" ")
								: name
					  )
					: resultHTMLArray
			);
			result.push(...arrayOfNames);
		}
		return postTreatment(result);
	};

	genOptions.forEach((genType, i) => {
		console.log("###############################-------" + i + "-------####################################");
		let result = generateNames(genType);
		const printResult = () => {
			console.log((result.length > 0 ? result : ["None"]).join("_"));
		};
		if (numberOfLastNames >= 1) {
			console.log("------------------All-----------------------");
			printResult();
			console.log("-----------------------------------------");
			console.log("-----------------First-----------------------");
			result = generateNames(genType).map((name) => name.split(" ")[0]);
			printResult();
			console.log("-----------------------------------------");

			if (numberOfLastNames === 1) {
				console.log("------------------Second-----------------------");
				result = generateNames(genType)
					.map((name) => {
						const [_, ...rest] = name.split(" ");
						return rest.join(" ");
					})
					.filter((n) => !!n && n !== "undefined");
				printResult();
				console.log("-----------------------------------------");
			} else {
				for (let i = 1; i <= numberOfLastNames; i++) {
					result = generateNames(genType)
						.map((name) => name.split(" ")[i])
						.filter((n) => !!n && n !== "undefined");
					console.log("------------------" + numberToOrdinalWords(i + 1) + "-----------------------");
					printResult();
					console.log("-----------------------------------------");
				}
			}
		} else {
			printResult();
		}
		console.log("###################################################################################");
	});
};
rychScript([undefined, 1], 0,true);
// rychScript([undefined, 1], 1, "last-name-first");
