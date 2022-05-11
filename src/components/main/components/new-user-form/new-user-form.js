import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import { useState } from 'react';
import { addUser } from '../../../../store/action';
import { store } from '../../../../store';

function NewUserForm() {
    const [newId, setId] = useState('');
    const [newName, setName] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();  
        store.dispatch(addUser(
           {
            id: newId,
            name: newName
            }))
        setId('');
        setName('');
      };


    return (
        <Form inline={true}>
            <br/>
            <br/>
            <legend>Add new user:</legend>
            <Input 
                placeholder="  ID"
                value={newId}
                onChange={({target})=>{setId(target.value)}}/>
            <Input 
                placeholder="  Name"
                value={newName}
                onChange={({target})=>{setName(target.value)}}/>
            <Button
                onClick={handleSubmit}
                disabled={!newId || !newName }
                variant="raised"
                color="primary"
            >Save</Button>
        </Form>
    );
}

export default NewUserForm;
