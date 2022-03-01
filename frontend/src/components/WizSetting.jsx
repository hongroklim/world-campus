import React, { useState } from "react"

import PrgmFilter from "./PrgmFilter"
import WizPriority from "./WizPriority"

import { DEFAULT_FILTERS } from "../utils/repo"
import { arrEquals, objEquals } from "../utils/wizardSupport"

const WizSetting = (props) => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [priority, setPriority] = useState([]);
  
  const isChanged = () => {
    return !objEquals(filters, DEFAULT_FILTERS)
            || !arrEquals(priority, []);
  }

  return (
    <>
      <h3>Filter</h3>
      <PrgmFilter filters={filters} hidden={['program']}
                  onUpdate={(e)=>setFilters(e)} />

      <h3>Priority</h3>
      <WizPriority priority={priority}
                    onUpdate={(e)=>{setPriority(e)}} />

      <div>
        <button>Close</button>
        {isChanged() ?
          <button>Save</button>
        : null}
      </div>
    </>
  )
}

export default WizSetting;
