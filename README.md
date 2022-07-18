# Trello Replica Clone

### Create an exact replica of the following webapp https://trello-replica.web.app/
### The following features included:
- Create new list
- Create new card
- Drag-n-drop cards between lists
- There are no API requests. You have to manage the data in local storage.

#### Uses @mui/material
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material

#### Uses makeStyles for styling (because makeStyles is deprecated, not used in @mui/material so I added tss-react so I can do the same thing as before)
- npm add tss-react

#### Manage the data in local storage:
- Use localStorage.setItem and localStorage.getItem.
- Use UseEffect to load and save the data into the local storage.
