
import React,{useState} from 'react';

import "./SearchBar.css"



const SearchBar = ({onTermSubmit}) => {
    const [term,setTerm]=useState("");

    const onInputChange=e=>{
        setTerm(e.target.value)
    }

    const onFormSubmit=e=>{
        e.preventDefault();


        onTermSubmit(term)
    }
    return (
        <form className="ui form header" onSubmit={onFormSubmit}>
            <div className="field">
                
                <h4 class="ui horizontal divider header m-top">
                    <i class="forward icon"></i>
                        Video Search
                    <i class="backward icon"></i>

                </h4>
                <input type="text" value={term} onChange={onInputChange} placeholder="Search for a video"/>
                <div className="ui divider m-top"></div>
            </div>
            
        </form>
    )
}

export default SearchBar
