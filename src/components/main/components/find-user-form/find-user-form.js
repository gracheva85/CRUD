import { Form, Input } from "muicss/react";
import { useState } from "react";
import SearchResult from "./components/search-result/search-result";


function FindUserInput(props) {
    const [name, setName] = useState('');
    const [search, setSearch] = useState(false);
    const users = props.users;
    let user = users.find((item)=> item.name===name);

    const handleSubmit = (evt) => {
        setName(evt.target.value)
        user = users.find((item)=> item.name===name);
        setSearch(true)
      };

    return (
        <>
            <br/>
            <br/>
            <Form inline={true}>
                <div>
                    <Input 
                        placeholder="  Еnter the username"
                        value={name}
                        onChange={handleSubmit}/>
                    &#128269;
                </div>
            </Form>
            {search && name.length>0 && <SearchResult user={user} />}
        </>
    );
}

export default FindUserInput;