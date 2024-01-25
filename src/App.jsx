import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("10");
	console.log(input);

	const getData = async () => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character`);
			const responseData = await response.json();
			const filteredData = await responseData.results.filter(
				(item) => item.id <= input
			);
			console.log(filteredData);
			// console.log(responseData.results);
			setData(filteredData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<input
				type="number"
				// value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<p>{item.status}</p>
					<img src={item.image} alt="" style={{ width: 200 }} />
				</div>
			))}
      <button onClick={() => (
        getData(data)
      )}>Add</button>
		</div>
	);
};

export default App;
