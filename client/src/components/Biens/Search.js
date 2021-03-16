
import React from 'react'
import {searchBien} from "../../actions/biensActions"

import { useDispatch  } from "react-redux";

function Search() {
const dispatch=useDispatch()
    const handleSearch=(e)=>{
        dispatch(searchBien(e.target.value))
    }

    return (
    <div className="search-box">
<input className="search-txt" type="text" name="" placeholder="Type to search" onChange={handleSearch} />
</div>                                                                                       

    )
}

export default Search