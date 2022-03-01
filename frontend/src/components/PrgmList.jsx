import PrgmItem from "./PrgmItem"

import { loadProfile } from "../utils/repo"
import { isAppliable } from "../utils/wizardSupport"

const isKeyword = (input, title) => {
  return title.toLowerCase().includes(input.toLowerCase());
}

const PrgmList = (props) => {
  const userProfile = loadProfile();
  
  const isVisible = e => {
    if(props.filters.program && !isKeyword(props.filters.program, e.name))
      return false;

    if(props.filters.region.length > 0 && !props.filters.region.includes(e.region))
      return false;

    if(props.filters.country.length > 0 && !props.filters.country.includes(e.country))
      return false;

    if(props.filters.isAppliable && !isAppliable(userProfile, e))
      return false;
    
    if(props.filters.isFavorite && !props.favorites.includes(e.sequence))
      return false;

    if(props.filters.allowLoa && e['restrict-loa'] === 'O')
      return false;

    if(props.filters.courseEng && e['course-english'] === 'X')
      return false;

    if(props.filters.otherMajor && e['course-taking-others'] === 'X')
      return false;

    return true;
  }

  return (
    <ul>
      {props.prgms.filter(isVisible).map(e => (
        <li key={e.sequence}>
          <PrgmItem info={e}
                isFavorite={props.favorites.includes(e.sequence)}
                isAppliable={isAppliable(userProfile, e)}
                onChangeFavorite={props.onChangeFavorite} />
        </li>
      ))}
    </ul>
  )
}

export default PrgmList;
