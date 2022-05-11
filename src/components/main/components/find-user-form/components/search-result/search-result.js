import Divider from 'muicss/lib/react/divider';

function SearchResult(props) {
    const user = props.user;

    if (user) {

        return (
            <>  
                <br/>
                <h2>Search result:</h2> 
                <p><strong>User name:</strong>&nbsp;{user.name}</p>
                <p><strong>User id:</strong>&nbsp;{user.id}</p>
                <Divider />
            </>
        )};
    
    return (
        <>
            <br/>
            <h2>Search result:</h2> 
            <p>There is no user with that name.</p>
            <Divider />
        </>
    );
}

export default SearchResult;