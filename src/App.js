//Build out our App.js
import React, { useState } from "react";
import { ListNode } from "./ListNode";
import LinkedListVisualizer from "./components/LinkedListVisualizer";
import './App.css';

function App() {
	const [head, setHead] = useState(null); //State to store the head of the linked list
	const [traverseResult, setTraverseResult] = useState([]); //Will store the state of the traversal

	function traversalLinkedList(head) {
		let current = head; //Start at the head
		let nodeValues = []; //Array to store node values

		//** 0(n) time complexity ** We will visit each node at least once (ACS Concept)
		while (current !== null) {
			nodeValues.push(current.value); //Add the current node's value to the Node Value Array
			current = current.next; //Move to the next node
		}

		return nodeValues; //Return the array of values
	}

	//handler function for traversing the linked list
	const handleTraverse = () => {
		const values = traversalLinkedList(head);
		setTraverseResult(values); //Set the result to display within our UI
	};

	//Function to create sample data for our linked list
	const createSampleList = () => {
		const node1 = new ListNode(1); //Create node1 with a val 1
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);
		const node4 = new ListNode(4);

		// 0(1) time complexity - setting each node's to the pointer. This is constant
		node1.next = node2;
		node2.next = node3;
		node3.next = node4;

		setHead(node1);
	};

	return (
		<div className="App">
			<h1>Linked List Visualizer</h1>
			<button onClick={createSampleList}>Create Linked List</button>
			<button onClick={handleTraverse}>Traverse Linked List</button>
			<LinkedListVisualizer head={head} />
			<div>
				<h2>Traverse Result:</h2>
				{traverseResult.length > 0 && (
					<div>{traverseResult.join(" → ")}</div> //Display the value of the nodes
				)}
			</div>
		</div>
	);
}

export default App;
