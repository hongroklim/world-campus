import { NavLink } from "react-router-dom";

const navList = [
  {"link": "/profile", "name": "Profile"},
  {"link": "/programs", "name": "List"},
  {"link": "/wizard", "name": "Wizard"},
]

const Navigator = () => {
  return (
    <>
      <hr />
      <ul>
        {navList.map(e => (
          <li key={e.link}>
            <NavLink to={e.link} 
              style={({ isActive} ) => ({"fontWeight": isActive ? "bold" : undefined})}>
              {e.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigator
