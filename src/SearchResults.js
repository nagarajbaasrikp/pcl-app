const SearchResults = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(props.data[0]).map((title, index) => (
                                title !== '_id' ? <th key={index}>{`${title}`}</th> : ''
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.searchResults.map((item, key) => {
                            //console.log(typeof(props.searchResults), typeof(item), props.searchResults, item);
                            return (
                                <tr key={key}>
                                    {
                                        Object.entries(item).map((property, key) => {
                                            //console.log(property[0] == 'address' ? property[0] : '', typeof(property[0]));
                                            return property[0] !== '_id' ? property[0] === 'address' ? <td key={key}>{`${property[1].street}, ${property[1].city}, ${property[1].pincode}, ${property[1].state}`}</td> : ( property[0] === 'hospital' ? <td key={key}>{`${property[1].name}`}</td> : <td key={key}>{`${property[1]}`}</td> ) : ''
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SearchResults