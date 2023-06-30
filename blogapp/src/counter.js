import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const upvote = () => setCount(count + 1);
	const downvote = () => setCount(count - 1);

	return (
		<div className='voter'>
			<button onClick={upvote}>
            <span>+</span>
			</button>
			<p>Upvotes: {count}</p>
			<button onClick={downvote}>
            <span>-</span>
			</button>
		</div>
	);
}

export default Counter;