import React, {useState, useEffect} from 'react';

import Box from './components/List/Box'
import AddSection from './components/List/AddCardSection/AddSection';

import store from './utils/store';
import useStyles from './styles'
import StoreAPI from './utils/storeAPI';

function App() {
    const {classes} = useStyles()
	const [data, setData] = useState(store)

	const addCard = (name, boxId) => {
		//CAN USE uuid() TO GENERATE UNIQUE ID, BUT NOT NESSECARY IN THIS PROJECT
		const box = data.boxes[boxId]
		box.cards = [
			...box.cards,
			{id: Math.random() * 10000, name}
		]

		//UPDATE STATE
		const state = {
			...data,
			boxes: {
				...data.boxes,
				[boxId]: box
			}
		}
		setData(state)
	}

	const addList = (title) => {
		const id = Math.random() * 10000
		const box = {id: id, title, cards:[]}
		const state = {
			boxIds: [
				...data.boxIds,
				id
			],
			boxes: {
				...data.boxes,
				[id]: box
			},
		}
		setData(state)
	}

	//---------------------------------------SAVE TO LOCAL STORAGE-----------------------------------------//

	// //RUN ONCE WHEN APP STARTS
	// useEffect(() => {
	// 	getLocalData()
	// }, [])

	// //USE EFFECT
	// useEffect(() => {
	// 	saveLocalData()
	// }, [data])
	
	// //SAVE TO LOCAL
	// const saveLocalData = () => {
	// 	localStorage.setItem('data', JSON.stringify(data))
	// }
	// const getLocalData = () => {
	// 	if(localStorage.getItem('data') === null)
	// 		localStorage.setItem('data', JSON.stringify([]))
	// 	else{
	// 		let dataLocal = JSON.parse(localStorage.getItem('data'))
	// 		setData(dataLocal)
	// 	}
	// }

	//---------------------------------------SAVE TO LOCAL STORAGE-----------------------------------------//
	
	return (
		<StoreAPI.Provider value={{addCard, addList}}>
			<div className={classes.app}>
				{data.boxIds.map((boxId) => {
					const box = data.boxes[boxId]
					return <Box
								key={boxId}
								box={box}
							/>
				})}
				<AddSection type='list'/>
			</div>
		</StoreAPI.Provider>
	);
}

export default App;
