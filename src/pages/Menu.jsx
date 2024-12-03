import { NavLink } from "react-router-dom"
import { NavItem } from "./NavItem"

const menuItems = [
    {name: "Главная", link: '/'},
    {name:"Дрифт-такси", link: '/drift'},
    {name:"Time Attack", link:'/timeattack'},
    {name:"Forza Karting", link:'/forza'}
]

export const Menu = () => {
    return(
        <nav className="menu">
           {menuItems.map(({name,link})=> (
            <NavItem key={name} name={name} link={link}/>
           ))}
        </nav>
    )
  }
  