import React, {useState, useEffect} from 'react';

import { v4 as uuidv4 } from 'uuid';
import Box from './components/List/Box'
import AddSection from './components/List/AddCardSection/AddSection';

import store from './utils/store';
import useStyles from './styles'
import StoreAPI from './utils/storeAPI';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
    const {classes} = useStyles()
	const [data, setData] = useState(store)

	const addCard = (name, boxId) => {
		const box = data.boxes[boxId]
		box.cards = [
			...box.cards,
			{id: uuidv4(), name}
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
		let id = uuidv4()
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

	const end = (result) => {
		const {destination, source, draggableId} = result
		console.log('destination:', destination, "source:", source, "draggableId:", draggableId )

		if (!destination) return

		const sourceBox = data.boxes[source.droppableId]
		const destinationBox = data.boxes[destination.droppableId]
		const draggingCard = sourceBox.cards.filter((card) => card.id === draggableId)[0]

		if (source.droppableId === destination.droppableId) {
			sourceBox.cards.splice(source.index, 1)
			destinationBox.cards.splice(destination.index, 0, draggingCard)
			const newSate = {
			  ...data,
			  boxes: {
				...data.boxes,
				[sourceBox.id]: destinationBox,
			  },
			}
			setData(newSate);
		  } else {
			sourceBox.cards.splice(source.index, 1)
			destinationBox.cards.splice(destination.index, 0, draggingCard)
	  
			const newState = {
			  ...data,
			  boxes: {
				...data.boxes,
				[sourceBox.id]: sourceBox,
				[destinationBox.id]: destinationBox,
			  },
			}
			setData(newState);
		  }
	}

	//---------------------------------------SAVE TO LOCAL STORAGE-----------------------------------------//

	//RUN ONCE WHEN APP STARTS
	useEffect(() => {
		getLocalData()
	}, [])

	//USE EFFECT
	useEffect(() => {
		saveLocalData()
	}, [data])
	
	//SAVE TO LOCAL
	const saveLocalData = () => {
		localStorage.setItem('data', JSON.stringify(data))
	}
	const getLocalData = () => {
		if(localStorage.getItem('data') === null)
			localStorage.setItem('data', JSON.stringify(data))
		else{
			let dataLocal = JSON.parse(localStorage.getItem('data'))
			setData(dataLocal)
		}
	}

	//---------------------------------------SAVE TO LOCAL STORAGE-----------------------------------------//
	
	return (
		<StoreAPI.Provider value={{addCard, addList}}>
			<DragDropContext onDragEnd={end}>	
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
			</DragDropContext>
		</StoreAPI.Provider>
	);
}

export default App;
