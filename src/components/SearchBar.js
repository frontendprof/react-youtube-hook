
import React,{useState} from 'react';



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
        <form className="ui form" onSubmit={onFormSubmit}>
            <div className="field">
                <label>Video Search</label>
                <input type="text" value={term} onChange={onInputChange}/>
            </div>
            
        </form>
    )
}

export default SearchBar
