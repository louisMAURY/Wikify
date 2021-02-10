const Dropdown = () =>{

    const data = [
        {value: 1, name: '1'},
        {value: 2, name: '2'},
        {value: 3, name: '3'},
    ]
    
    return(
        <div>
            <select>
                {data.map((items, index) => <option key={index} value={items.value} >{items.name}</option>)}
            </select>
        </div>

    )
}

export default Dropdown