import { MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { VStack, Text, HStack, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { shortMonths, humanDays } from "./assets/dates";

// The Step defines the number of days it will jump at the time
// The count is the value that tells you how far you are from the current date && the one that modifies the state
// Define a count
function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + count);

	// * stepSize functions
	function handleSlide(e: any) {
		e.preventDefault();
		const currentValue = e.target.value;
		setStep(() => Number(currentValue));
	}

	// * Counter functions
	function decrementDate() {
		setCount((previousValue) => previousValue - step);
	}

	function counterPlus() {
		setCount((previousValue) => previousValue + step);
	}

	function handleUserInput(e: any) {
		e.preventDefault();
		console.log(e.target.value, "TETBOS");
		setCount(Number(e.target.value));
	}

	function resetParams() {
		setStep(1)
		setCount(0)
	}

	return (
		<VStack
			backgroundColor='beige'
			height='100vh'
			alignItems='center'
			justifyContent='center'
		>
			<Heading mb='2rem'>Simple Time Teller</Heading>
			<HStack>
				{/* * Step size */}
				<input
					type='range'
					onChange={(e) => handleSlide(e)}
					value={step}
					min={1}
				/>
				<Text fontSize='2rem'>{step}</Text>
				{/* * Step size finish */}
			</HStack>
			<HStack>
				{/*  * Date modifier */}
				<MinusIcon onClick={decrementDate} cursor='pointer' boxSize={8} />
				<Input type='number' value={count === 0 ? "" : count} onChange={(e) => handleUserInput(e)} />
				<PlusSquareIcon onClick={counterPlus} cursor='pointer' boxSize={8} />
				{/*  * Date modifier */}
			</HStack>
			{/* * OUTPUT */}
			<Text fontSize='2.5rem'>
				{count !== 0 ? count : ""}{" "}
				{count === 0
					? `Today is`
					: count > 0
					? "days from today is"
					: "days ago"}{" "}
				{`${humanDays[currentDate.getDay()]} ${
					shortMonths[currentDate.getMonth()]
				} ${currentDate.getDate()} ${currentDate.getFullYear()}`}
			</Text>
			{step !== 1 || count !== 0 && <Button onClick={resetParams}>RESET</Button>}
			{step !== 1 || count !== 0 ? <Button onClick={resetParams}>RESET</Button> : <></>}
			
		</VStack>
	);
}

export default App;
