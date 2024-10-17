// HashMapPractice.js
import React, {useState} from "react";

function HashMapPractice() {
	// Definitions:
	// - nums: This is the array of numbers we will work with for the Two Sum problem.
	// - target: The sum we are looking for when adding two numbers in nums.
	// - twoSumResult: The result of the Two Sum problem (the indices of the two numbers).
	// - anagramsInput: This is the array of words we will group by anagrams.
	// - groupAnagramsResult: The result of the Group Anagrams problem (grouped words).

	// Import necessary React features for state management

	// Component for practicing hash map problems using React

	// States to store input values and results for each problem
	const [nums, setNums] = useState([2, 7, 11, 15]); // State for initial array for the Two Sum problem
	const [target, setTarget] = useState(9); // State for target value in the Two Sum problem
	const [twoSumResult, setTwoSumResult] = useState([]); // State to store the result of the Two Sum problem
	const [anagramsInput, setAnagramsInput] = useState([
		"eat",
		"tea",
		"tan",
		"ate",
		"nat",
		"bat",
        "tab",
        "ten",
        "net"
	]); // State for initial array for the Group Anagrams problem
	const [groupAnagramsResults, setGroupAnagramsResult] = useState([]); // State to store the result of the Group Anagrams problem

	// Function to solve the Two Sum problem
	// The goal is to find two numbers in the array that add up to the target
	const twoSum = (nums, target) => {
		const map = {}; // Initialize an empty hash map to track numbers and their indices

		for (let i = 0; i < nums.length; i++) {
			const complement = target - nums[i]; // Iterate through the array to find the complement that adds up to the target
			if (map[complement] !== undefined) {
				return [map[complement], i]; // Return an empty array if no solution is found
			}

			map[nums[i]] = i; // Add the current number and its index to the hash map
		}
		return []; // Check if the complement exists in the hash map, return the indices if found
	};

	// Handler function for the Two Sum problem
	const handleTwoSum = () => {
		const result = twoSum(nums, target); // Call the twoSum function and update the result state
		setTwoSumResult(result);
	};
	// Function to solve the Group Anagrams problem
	const groupAnagrams = (strs) => {
		// The goal is to group strings that are anagrams of each other
		const map = {}; // Initialize an empty hash map to group anagrams by sorted string

		// Iterate through the array of strings
		// Sort the characters in the string to use as a hash map key
		// If the sorted string is not already in the hash map, initialize an empty array
		for (let str of strs) {
			const sorted = str.split("").sort().join("");

			if (!map[sorted]) {
				map[sorted] = [];
			}
			// Add the original string to the corresponding group of anagrams
			map[sorted].push(str);
		}

		return Object.values(map); // Return the grouped anagrams as an array of arrays
	};
    // Handler function for the Group Anagrams problem
    const handleGroupAnagrams = () => {
        const result = groupAnagrams(anagramsInput); // Call the groupAnagrams function and update the result state
        setGroupAnagramsResult(result);
    }
	// Render the Two Sum and Group Anagrams sections
	// Display the array, target, and a button to find the Two Sum solution

    return (
        <div className="hash-map-practice">
            <h2>Hash Map Practice</h2>

            {/* Two Sum Section*/}
            <div className="two-sum">
                <h3>Two Sum Problem</h3>
                <p>Find two numbers in the array that add up to the target</p>
                <p>Array: {JSON.stringify(nums)}</p>
                <p>Target: {target}</p>
                <button onClick={handleTwoSum}>Find Two Sums</button>
                {twoSumResult.length > 0 && (
                    <p>indices: {JSON.stringify(twoSumResult)}</p>
                )}
            </div>
                
                {/* Group Anagrams Section*/}
            <div className="group-anagrams">
                <h3>Group Anagrams Problem</h3>
                <p>Group the following words into an anagram</p>
                <p>Words: {JSON.stringify(anagramsInput)}</p>
                <button onClick={handleGroupAnagrams}>Group Anagrams</button>
                {groupAnagramsResults.length > 0 && (
                    <div>
                        <h4>Grouped Anagrams</h4>
                        <ul>
                            {groupAnagramsResults.map((group, index) => (
                                <li key={index}>{JSON.stringify(group)}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HashMapPractice;