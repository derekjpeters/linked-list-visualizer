import React, { useState } from 'react';

function HashMapPractice() {
    const [nums] = useState([2, 7, 11, 15]);  // Initial array for Two Sum
    const [target] = useState(9);  // Target value for Two Sum
    const [twoSumResult, setTwoSumResult] = useState([]);  // Result for Two Sum
    const [anagramsInput] = useState(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);  // Initial array for Group Anagrams
    const [groupAnagramsResult, setGroupAnagramsResult] = useState([]);  // Result for Group Anagrams

    // Function to solve the Two Sum problem
    const twoSum = (nums, target) => {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map[complement] !== undefined) {
                return [map[complement], i];
            }
            map[nums[i]] = i;
        }
        return [];
    };

    // Handler for solving Two Sum problem
    const handleTwoSum = () => {
        const result = twoSum(nums, target);
        setTwoSumResult(result);
    };

    // Function to solve the Group Anagrams problem
    const groupAnagrams = (strs) => {
        const map = {};
        for (let str of strs) {
            const sorted = str.split('').sort().join('');
            if (!map[sorted]) {
                map[sorted] = [];
            }
            map[sorted].push(str);
        }
        return Object.values(map);
    };

    // Handler for solving Group Anagrams problem
    const handleGroupAnagrams = () => {
        const result = groupAnagrams(anagramsInput);
        setGroupAnagramsResult(result);
    };

    return (
        <div className="hash-map-practice">
            <h2>Hash Map Practice</h2>
            
            {/* Two Sum Section */}
            <div className="two-sum">
                <h3>Two Sum Problem</h3>
                <p>Find two numbers in the array that add up to the target.</p>
                <p>Array: {JSON.stringify(nums)}</p>
                <p>Target: {target}</p>
                <button onClick={handleTwoSum}>Find Two Sum</button>
                {twoSumResult.length > 0 && (
                    <p>Indices: {JSON.stringify(twoSumResult)}</p>
                )}
            </div>

            {/* Group Anagrams Section */}
            <div className="group-anagrams">
                <h3>Group Anagrams Problem</h3>
                <p>Group the following words into anagrams:</p>
                <p>Words: {JSON.stringify(anagramsInput)}</p>
                <button onClick={handleGroupAnagrams}>Group Anagrams</button>
                {groupAnagramsResult.length > 0 && (
                    <div>
                        <h4>Grouped Anagrams:</h4>
                        <ul>
                            {groupAnagramsResult.map((group, index) => (
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