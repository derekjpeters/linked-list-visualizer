import React, { useState } from 'react';
import { ListNode } from './ListNode';
import LinkedListVisualizer from './components/LinkedListVisualizer';
import HashMapPractice from './components/HashMapPractice';
import './App.css';

function App() {
    const [head, setHead] = useState(null);  // State for the head of the linked list
    const [traverseResult, setTraverseResult] = useState([]);  // State for storing the result of traversing the linked list
    const [reversedResult, setReversedResult] = useState([]);  // State for storing the result of reversing the linked list
    const [showHashMapPractice, setShowHashMapPractice] = useState(false);  // State to toggle between linked lists and hash maps

    // Function to traverse the linked list and collect node values
    function traverseLinkedList(head) {
        let current = head;
        let nodeValues = [];
        while (current !== null) {
            nodeValues.push(current.value);  // Collect the value of each node
            current = current.next;  // Move to the next node
        }
        return nodeValues;
    }

    // Handler for traversing the linked list
    const handleTraverse = () => {
        const values = traverseLinkedList(head);
        setTraverseResult(values);  // Update state to store the result of traversal
    };

    // Function to create a sample linked list
    const createSampleList = () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);
        const node4 = new ListNode(4);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        setHead(node1);  // Set the head of the linked list to the first node
    };

    // Function to reverse the linked list and collect the reversed values
    function reverseLinkedList(head) {
        let prev = null;
        let current = head;
        let next = null;
        let reversedValues = [];  // Array to store the values of the reversed list

        while (current !== null) {
            next = current.next;
            current.next = prev;  // Reverse the pointer to the previous node
            prev = current;
            current = next;
        }

        // After reversing the list, traverse the reversed list to collect the values
        let newHead = prev;
        let temp = newHead;
        while (temp !== null) {
            reversedValues.push(temp.value);  // Collect the reversed node values
            temp = temp.next;
        }

        return { newHead, reversedValues };  // Return both the new head and the reversed values
    }

    // Handler for reversing the linked list
    const handleReverse = () => {
        const { newHead, reversedValues } = reverseLinkedList(head);
        setHead(newHead);  // Update the head to the reversed list
        setReversedResult(reversedValues);  // Store the reversed list result in state
    };

    return (
        <div className="App">
            <h1>Data Structure Visualizer</h1>

            {/* Button to toggle between Linked List and Hash Map practice */}
            <button onClick={() => setShowHashMapPractice(!showHashMapPractice)}>
                {showHashMapPractice ? 'Go to Linked List' : 'Go to Hash Map Practice'}
            </button>

            {!showHashMapPractice ? (
                <>
                    <h2>Linked List Visualizer</h2>
                    <button onClick={createSampleList}>Create Linked List</button>
                    <button onClick={handleTraverse}>Traverse Linked List</button>
                    <button onClick={handleReverse}>Reverse Linked List</button>
                    <LinkedListVisualizer head={head} />
                    
                    <div>
                        <h3>Traverse Result:</h3>
                        {traverseResult.length > 0 && (
                            <div className="result">{traverseResult.join(' → ')}</div>
                        )}
                    </div>

                    <div>
                        <h3>Reversed Result:</h3>
                        {reversedResult.length > 0 && (
                            <div className="result">{reversedResult.join(' → ')}</div>
                        )}
                    </div>
                </>
            ) : (
                <HashMapPractice />
            )}
        </div>
    );
}

export default App;