import JoinUs from './join'
import Setting from './setting'
import Search from './Search'
import ContactUs from './contactUs'
import Login from './Login'
import Help from './Help'
import Home from './Home'
import Download from './Download'
import Styles from './list.module.css'
export default function ListMenu(){
return (
    <div className={Styles.div}>
        <JoinUs />
        <Setting />
        <Login />
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Download />
    </div>
)
}