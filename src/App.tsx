import { MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { VStack, Text, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { shortMonths, humanDays } from "./assets/dates";

// The Step defines the number of days it will jump at the time
// The count is the value that tells you how far you are from the current date && the one that modifies the state
// Define a count
function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() - count)

	// * stepSize functions
	function stepSizePlus() {
		setStep((currentState) => currentState + 1);
		// // * This works
		// setStep((currentState) => {
		// setCount(() => currentState + 1)
		// return  currentState + 1
		// })
	}

	function stepSizeMinus() {
		setStep((currentState) => currentState - 1);
	}

	// * Counter functions
	function decrementDate() {
		setCount((previousValue) => previousValue - step);
		// setCurrentDate((previousDate) => {
		// 	// return new Date(previousDate.setDate(previousDate.getDate() - step));
    //   const prev = previousDate.setDate(previousDate.getDate() - step) 
    //   console.log(previousDate, "TODAY")
		// 	return new Date(prev);
		// });
	}

	function counterPlus() {
		setCount((previousValue) => previousValue + step);
		// setCurrentDate((previousDate) => {
		// 	return new Date(previousDate.getDate() + 1);
		// });
	}

	return (
		<VStack backgroundColor="beige" height="100vh" alignItems="center" justifyContent="center">
      <Heading
      mb="2rem"
      >Simple Time Teller</Heading>
			<HStack>
        {/* * Step size */}
				<MinusIcon onClick={stepSizeMinus} cursor='pointer' boxSize={8} />
				<Text fontSize='2rem'>step: {step}</Text>
				<PlusSquareIcon onClick={stepSizePlus} cursor='pointer' boxSize={8} />
        {/* * Step size finish */}
			</HStack>
			<HStack>
        {/*  * Date modifier */}
				<MinusIcon onClick={() => decrementDate()} cursor='pointer' boxSize={8} />
				<Text fontSize='2rem'>count: {count}</Text>
				<PlusSquareIcon onClick={counterPlus} cursor='pointer' boxSize={8} />
        {/*  * Date modifier */}
			</HStack>
      {/* * OUTPUT */}
			<Text fontSize='2.5rem'>
				Today is{" "}
				{`${humanDays[currentDate.getDay()]} ${
					shortMonths[currentDate.getMonth()]
				} ${currentDate.getDay()} ${currentDate.getFullYear()}`}
			</Text>
		</VStack>
	);
}

export default App;