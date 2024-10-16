import React from "react";
import '../App.css'

function LinkedListVisualizer({ head }) {
    let nodes = [];
    let current = head;

    while (current !== null) {
        nodes.push(
            <div key={current.value} className="node">
                {current.value}
                {current.next && <span> → </span>}
            </div>
        );

        current = current.next;
    }
    return <div className="linked-list">{nodes}</div>
}

export default LinkedListVisualizer;