import { useState } from 'react'
import Container from './component/UI/Container';
import style from './App.module.css'

function App() {

    const [userClicked, setUserClicked] = useState(false);

    const setTheme = () => {
        setUserClicked((prevstate) => {
            return prevstate ? false : true
        });
    }

    return (
        <div className={userClicked ? style.lighttheme : style.darkTheme} >
            <Container setTheme={setTheme} />
        </div>
    )
}

export default App;