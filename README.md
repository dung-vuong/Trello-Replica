# Trello Replica Clone

# Try it now: https://trello-replica.vercel.app/

![Screenshot (327)](https://user-images.githubusercontent.com/79184498/179663524-83a0713d-1260-4a78-840d-9d94fc6f9041.png)

## ⬇️ What I have done ⬇️
### Create an exact replica of the following webapp https://trello-replica.web.app/
### The following features included:
- Create new list
- Create new card
- Drag-n-drop cards between lists
- There are no API requests. You have to manage the data in local storage.

## ⬇️ Demo Run ⬇️ 
https://user-images.githubusercontent.com/79184498/179664036-3bf1a23c-a67d-482b-9fc0-0fac026e1704.mp4


## ⬇️ What I used ⬇️

#### Uses @mui/material
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material

#### Uses makeStyles for styling (because makeStyles is deprecated, not used in @mui/material so I added tss-react so I can do the same thing as before)
- npm add tss-react

#### Use uuidv4 to generate a unique id
- npm install uuid

#### Use react-beautiful-dnd for drag and drop cards
- npm install react-beautiful-dnd

#### Manage the data in local storage:
- Use localStorage.setItem and localStorage.getItem.
- Use UseEffect to load and save the data into the local storage.

