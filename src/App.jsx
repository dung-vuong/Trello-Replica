import React, {useState} from 'react';
import Box from './components/List/Box'
import store from './utils/store';

import useStyles from './styles'

function App() {
    const {classes} = useStyles()
	const [data, setData] = useState(store)
	
	return (
		<div className={classes.app}>
			{data.boxIds.map((boxId) => {
				const box = data.boxes[boxId]
				return <Box
							key={boxId}
							box={box}
						/>
			})}
		</div>
	);
}

export default App;
