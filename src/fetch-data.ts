import {request} from "graphql-request";
import path from "path";
import fs from "fs";

// ➖➖➖➖➖➖➖ AAVE ➖➖➖➖➖➖➖

async function getRatesForAaveV2Mainnet() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/8wR23o1zkS4gpLqLNU4kG3JHYVucqGyopL5utGxP2q1N`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aave2/mainnet/aaveV2-mainnet",
		logInfo: "AaveV2Mainnet",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Mainnet() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aaveV3/mainnet/aaveV3-mainnet",
		logInfo: "AaveV3Mainnet",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Polygon() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/Co2URyXjnxaw8WqxKyVHdirq9Ahhm5vcTs4dMedAq211`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aaveV3/polygon/aaveV3-polygon",
		logInfo: "AaveV3Polygon",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Arbitrum() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/DLuE98kEb5pQNXAcKFQGQgfSQ57Xdou4jnVbAEqMfy3B`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aaveV3/arbitrum/aaveV3-arbitrum",
		logInfo: "AaveV3Arbitrum",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV2Avalanche() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/EZvK18pMhwiCjxwesRLTg81fP33WnR6BnZe5Cvma3H1C`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aave2/avalanche/aaveV2-avalanche",
		logInfo: "AaveV2Avalanche",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Avalanche() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/2h9woxy8RTjHu1HJsCEnmzpPHFArU33avmUh4f71JpVn`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aaveV3/avalanche/aaveV3-avalanche",
		logInfo: "AaveV3Avalanche",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Base() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/GQFbb95cE6d8mV989mL5figjaGaKCQB3xqYrr1bRyXqF`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/base/aaveV3-base",
		logInfo: "AaveV3Base",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Bnb() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/7Jk85XgkV1MQ7u56hD8rr65rfASbayJXopugWkUoBMnZ`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/bnb/aaveV3-bnb",
		logInfo: "AaveV3Bnb",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Fantom() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/6L1vPqyE3xvkzkWjh6wUKc1ABWYYps5HJahoxhrv2PJn`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/fantom/aaveV3-fantom",
		logInfo: "AaveV3Fantom",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Gnosis() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/HtcDaL8L8iZ2KQNNS44EBVmLruzxuNAz1RkBYdui1QUT`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/gnosis/aaveV3-gnosis",
		logInfo: "AaveV3Gnosis",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Lido() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/5vxMbXRhG1oQr55MWC5j6qg78waWujx1wjeuEWDA6j3`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/lido/aaveV3-lido",
		logInfo: "AaveV3Lido",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Optimism() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/DSfLz8oQBUeU5atALgUFQKMTSYV9mZAVYp4noLSXAfvb`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix:
			"../data/utilization-rates/aaveV3/optimism/aaveV3-optimism",
		logInfo: "AaveV3Optimism",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3Scroll() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/74JwenoHZb2aAYVGCCSdPWzi9mm745dyHyQQVoZ7Sbub`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/scroll/aaveV3-scroll",
		logInfo: "AaveV3Scroll",
		fetchFunction: fetchDataFromAave,
	});
}

async function getRatesForAaveV3ZKsync() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/ENYSc8G3WvrbhWH8UZHrqPWYRcuyCaNmaTmoVp7uzabM`;
	const symbols = await getSymbolsAave(endpoint);
	if (!symbols) {
		console.log("\x1b[32mNot found symbols for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveDataForAave({
		endpoint,
		symbols,
		csvFilenamePrefix: "../data/utilization-rates/aaveV3/zksync/aaveV3-zksync",
		logInfo: "AaveV3ZKsync",
		fetchFunction: fetchDataFromAave,
	});
}

// ➖➖➖

async function getSymbolsAave(endpoint: string) {
	const query = `{
		reserves {
			symbol
		}
	}`;

	try {
		const data = await request(endpoint, query);
		const symbols = Array.from(
			new Set(data.reserves.map((reserve: {symbol: string}) => reserve.symbol))
		);
		if (symbols.length === 0) return null;
		return symbols;
	} catch (error) {
		console.error("Error fetching data:", error);
		process.exit(1);
	}
}

// Helper function to retry a request with backoff
async function retryRequest(
	endpoint: string,
	requestFn: () => Promise<any>,
	retries = 3,
	backoff = 1000,
	timeout = 10000 // 10 seconds timeout for no response
): Promise<any> {
	for (let i = 0; i < retries; i++) {
		try {
			const result = await Promise.race([
				requestFn(), // The request function
				new Promise((_, reject) =>
					setTimeout(() => reject(new Error("Request timed out")), timeout)
				), // Timeout after 10 seconds
			]);

			return result;
		} catch (error) {
			console.warn(
				`Request attempt ${i + 1}/${retries} failed, endpoint ${endpoint}, err msg:`,
				error.message
			);

			// If this was the last retry, return an empty array
			if (i === retries - 1) return [];

			// Wait before the next retry with exponential backoff
			await new Promise((resolve) => setTimeout(resolve, backoff * (i + 1)));
		}
	}
}

// Modified fetch function for Aave with retry mechanism
async function fetchDataFromAave(
	endpoint: string,
	symbol: string,
	skip: number,
	limit: number,
	lastTimestamp: number
) {
	const query = `{
    reserveParamsHistoryItems(
      where: {reserve_: {symbol: "${symbol}"}, utilizationRate_gt: "0", timestamp_gt: ${lastTimestamp}},
      orderBy: timestamp
      orderDirection: asc
      skip: ${skip}
      first: ${limit}
    ) {
      timestamp
      utilizationRate
      totalATokenSupply
    }
  }`;

	return retryRequest(endpoint, () =>
		request(endpoint, query).then(
			(data) => data.reserveParamsHistoryItems || []
		)
	);
}

async function getLatestTimestamp(
	filePath: string,
	logInfo: string,
	symbol: string
): Promise<number> {
	// If the CSV file exists, remove it before appending new data
	if (fs.existsSync(filePath)) {
		const lastEntryTimestamp = fs
			.readFileSync(filePath, "utf-8")
			.split("\n")
			.slice(-2)[0]
			.split(",")[0];

		console.log(
			`Detected latest date: ${new Date(lastEntryTimestamp * 1000).toISOString()} for ${logInfo} ${symbol}, continuing fetching data from there...`
		);

		if (
			typeof lastEntryTimestamp === "string" &&
			lastEntryTimestamp.length === 10
		) {
			return parseInt(lastEntryTimestamp);
		} else {
			console.log(
				`Invalid or missing timestamp: ${lastEntryTimestamp} for ${logInfo} ${symbol}. Consider fixing or deleting file. Exiting...`
			);
			process.exit(1);
			return 0; // Reset timestamp if invalid
		}
	} else {
		console.log(
			`No file found for ${logInfo} ${symbol}, starting from scratch...`
		);
		return 0;
	}
}

async function fetchAndSaveDataForAave({
	endpoint,
	symbols,
	csvFilenamePrefix,
	logInfo,
	fetchFunction,
	csvHeader = "timestamp,utilizationRate\n",
	limit = 1_000,
}) {
	const timeStartTotal = performance.now();

	await Promise.all(
		symbols.map(async (symbol) => {
			console.log(`\nFetching data for ${logInfo} ${symbol}...`);

			let result = null;
			let skip = 0;
			let hasData = false;
			const timeStartToken = performance.now();

			const csvFilename = `${csvFilenamePrefix}-${symbol}.csv`;
			const filePath = path.join(__dirname, csvFilename);

			let lastTimestamp = await getLatestTimestamp(filePath, logInfo, symbol);

			while (true) {
				// console.log(
				// 	`Fetching for ${logInfo}: ${symbol} from: ${skip} to: ${skip + limit}...`
				// );

				// TODO provide timestamp from
				result = await fetchFunction(
					endpoint,
					symbol,
					skip,
					limit,
					lastTimestamp
				);
				if (!result || result.length === 0) {
					console.log(`No data found for ${symbol}`);
					break;
				}

				// Map the results to CSV rows
				const csvData = result
					.map((item) => `${item.timestamp},${item.utilizationRate}`)
					.join("\n");

				lastTimestamp = parseInt(result[result.length - 1].timestamp);
				// If data exists, mark that data was found
				if (csvData) {
					hasData = true;

					// Ensure the directory exists
					const dirPath = path.dirname(filePath);
					if (!fs.existsSync(dirPath)) {
						fs.mkdirSync(dirPath, {recursive: true});
					}

					// Write CSV header if the file doesn't exist
					if (!fs.existsSync(filePath)) {
						fs.writeFileSync(filePath, csvHeader);
					}

					// Append the new data to the CSV file
					fs.appendFileSync(filePath, csvData + "\n");
				}

				skip += limit;

				if (result.length < limit) {
					break;
				}
			}

			if (hasData) {
				console.log(
					`Completed fetching data for ${logInfo} ${symbol} in`,
					(performance.now() - timeStartToken) / 1_000,
					"seconds"
				);
			} else {
				console.log(`No data saved for ${symbol} as no valid data was found.`);
			}
		})
	);

	console.log(
		`\x1b[32mCompleted fetching data for all ${logInfo} reserves in`,
		(performance.now() - timeStartTotal) / 1_000,
		"seconds"
	);
}

// ➖➖➖➖➖➖ COMPOUND ➖➖➖➖➖➖

async function getRatesForCompoundV2Mainnet() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/4TbqVA8p2DoBd5qDbPMwmDZv3CsJjWtxo8nVSqF2tA9a`;
	const markets = await getMarketsFromCompound(endpoint);
	if (!markets) {
		console.log("\x1b[32mNot found markets for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveCompoundData({
		endpoint,
		markets,
		csvFilenamePrefix:
			"../data/utilization-rates/compoundV2/mainnet/compoundV2-mainnet",
		logInfo: "CompoundV2Mainnet",
		fetchFunction: fetchDataFromCompound,
	});
}

async function getRatesForCompoundV3Mainnet() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/AwoxEZbiWLvv6e3QdvdMZw4WDURdGbvPfHmZRc8Dpfz9`;
	const markets = await getMarketsFromCompound(endpoint);
	if (!markets) {
		console.log("\x1b[32mNot found markets for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveCompoundData({
		endpoint,
		markets,
		csvFilenamePrefix:
			"../data/utilization-rates/compoundV3/mainnet/compoundV3-mainnet",
		logInfo: "CompoundV3Mainnet",
		fetchFunction: fetchDataFromCompound,
	});
}

async function getRatesForCompoundV3Arbitrum() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/5MjRndNWGhqvNX7chUYLQDnvEgc8DaH8eisEkcJt71SR`;
	const markets = await getMarketsFromCompound(endpoint);
	if (!markets) {
		console.log("\x1b[32mNot found markets for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveCompoundData({
		endpoint,
		markets,
		csvFilenamePrefix:
			"../data/utilization-rates/compoundV3/arbitrum/compoundV3-arbitrum",
		logInfo: "CompoundV3Arbitrum",
		fetchFunction: fetchDataFromCompound,
	});
}

async function getRatesForCompoundV3Polygon() {
	const endpoint = `https://gateway.thegraph.com/api/${process.env.API_GRAPHQL}/subgraphs/id/5wfoWBpfYv59b99wDxJmyFiKBu9brXESeqJAzw8WP5Cz`;
	const markets = await getMarketsFromCompound(endpoint);
	if (!markets) {
		console.log("\x1b[32mNot found markets for endpoint:", endpoint);
		return;
	}

	await fetchAndSaveCompoundData({
		endpoint,
		markets,
		csvFilenamePrefix:
			"../data/utilization-rates/compoundV3/polygon/compoundV3-polygon",
		logInfo: "CompoundV3Polygon",
		fetchFunction: fetchDataFromCompound,
	});
}

// ➖➖➖

async function getMarketsFromCompound(endpoint: string) {
	const query = `{
		markets(
			where: {totalBorrowBalanceUSD_not: "0", totalDepositBalanceUSD_not: "0"}
		) {
			inputToken {
				symbol
			}
			name
			id
		}
	}`;

	try {
		const data = await request(endpoint, query);
		if (!data || !data.markets) throw new Error("No markets found");
		return data.markets;
	} catch (error) {
		console.error("Error fetching data:", error);
		process.exit(1);
	}
}

async function fetchDataFromCompound(
	endpoint: string,
	marketId: string,
	skip: number,
	limit: number,
	lastTimestamp: number
) {
	const query = `query MyQuery {
		marketHourlySnapshots(
			first: ${limit}
			orderBy: timestamp
			orderDirection: asc
			where: {totalDepositBalanceUSD_not: "0", totalBorrowBalanceUSD_not: "0", market: "${marketId}", timestamp_gt: ${lastTimestamp}}
			skip: ${skip}
		) {
			timestamp
			totalBorrowBalanceUSD
			totalDepositBalanceUSD
		}
	}`;

	return retryRequest(endpoint, () =>
		request(endpoint, query).then((data) => data.marketHourlySnapshots || [])
	);
}

async function fetchAndSaveCompoundData({
	endpoint,
	markets,
	csvFilenamePrefix,
	logInfo,
	fetchFunction,
	csvHeader = "timestamp,utilizationRate\n",
	limit = 1_000,
}) {
	const timeStartTotal = performance.now();

	// Iterate over all the markets to fetch data
	await Promise.all(
		markets.map(async (market) => {
			console.log(
				`\nFetching data for ${logInfo} ${market.inputToken.symbol}...`
			);

			let result = null;
			let skip = 0;
			let hasData = false;
			const timeStartToken = performance.now();

			// Define the file path
			const csvFilename = `${csvFilenamePrefix}-${market.inputToken.symbol}.csv`;
			const filePath = path.join(__dirname, csvFilename);

			// If the CSV file exists, remove it before appending new data
			let lastTimestamp = await getLatestTimestamp(
				filePath,
				logInfo,
				market.inputToken.symbol
			);

			// Fetch data in batches using the skip and limit logic
			while (true) {
				// console.log(
				// 	`Fetching for ${logInfo}: ${market.inputToken.symbol} from: ${skip} to: ${skip + limit}...`
				// );
				result = await fetchFunction(
					endpoint,
					market.id,
					skip,
					limit,
					lastTimestamp
				);
				if (!result || result.length === 0) {
					console.log(
						`No data found for ${market.inputToken.symbol}, endpoint ${endpoint}`
					);
					break;
				}

				// Map the results to CSV rows
				const csvData = result
					.map((item) => {
						return `${item.timestamp},${item.totalBorrowBalanceUSD / item.totalDepositBalanceUSD}`;
					})
					.join("\n");

				lastTimestamp = parseInt(result[result.length - 1].timestamp);

				// If data exists, mark that data was found
				if (csvData) {
					hasData = true;

					// Ensure the directory exists
					const dirPath = path.dirname(filePath);
					if (!fs.existsSync(dirPath)) {
						fs.mkdirSync(dirPath, {recursive: true});
					}

					// Write CSV header if the file doesn't exist
					if (!fs.existsSync(filePath)) {
						fs.writeFileSync(filePath, csvHeader);
					}

					// Append the data to the CSV file
					fs.appendFileSync(filePath, csvData + "\n");
				}

				skip += limit;

				if (result.length < limit) {
					break;
				}
			}

			if (hasData) {
				console.log(
					`Completed fetching data for ${logInfo} ${market.inputToken.symbol} in`,
					(performance.now() - timeStartToken) / 1000,
					"seconds"
				);
			} else {
				console.log(
					`No data saved for ${market.inputToken.symbol} as no valid data was found.`
				);
			}
		})
	);

	console.log(
		`\x1b[32mCompleted fetching data for all ${logInfo} markets in`,
		(performance.now() - timeStartTotal) / 1000,
		"seconds"
	);
}

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

(async () => {
	if (!process.env.API_GRAPHQL)
		throw new Error(
			"Obtain a free API key from: https://thegraph.com/ and set it in the .env file"
		);

	/// split execution as needed to avoid rate limiting
	await Promise.all([
		// aave v2...
		getRatesForAaveV2Mainnet(),

		getRatesForAaveV2Avalanche(),
		// // aave v3...
		getRatesForAaveV3Mainnet(),
		getRatesForAaveV3Polygon(),
		getRatesForAaveV3Arbitrum(),
		getRatesForAaveV3Avalanche(),
		getRatesForAaveV3Base(),
		getRatesForAaveV3Bnb(),
		getRatesForAaveV3Fantom(),
		getRatesForAaveV3Gnosis(),
		getRatesForAaveV3Lido(),
		getRatesForAaveV3Optimism(),
		getRatesForAaveV3Scroll(),
		getRatesForAaveV3ZKsync(),
		// // compound v2...
		getRatesForCompoundV2Mainnet(),
		// // compound v3...
		getRatesForCompoundV3Mainnet(),
		getRatesForCompoundV3Arbitrum(),
		getRatesForCompoundV3Polygon(),
	]);
})();
