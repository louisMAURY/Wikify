const Dropdown = (props) =>{


    
    return(
        <div>
            <select>
                {props.options.map((items, index) => <option key={index} value={items.value} >{items.name}</option>)}
            </select>
        </div>

    )
}

export default Dropdown