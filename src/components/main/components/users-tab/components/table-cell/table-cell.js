import * as S from './table-cell.styled';
import Button from 'muicss/lib/react/button';
import { useCallback, useState } from 'react';
import { changeUser, deleteUser } from '../../../../../../store/action';
import { store } from '../../../../../../store';

function TableCell(props) {
    const user = props.user;
    const users = props.users;
    const [id, setId] = useState(user.id);
    const [name, setName] = useState(user.name);

    const handleDeleteButton = useCallback((evt, id) => {
        evt.preventDefault();    
        store.dispatch(deleteUser(id));
      }, []);

    const handleChangeButton = useCallback((evt) => {

        const changeUsers = () => {
            const changedUsers = users.slice();
            let modifiedItem = Object.assign({}, user);

            modifiedItem.id = id;
            modifiedItem.name = name;

            const index = users.indexOf(user);
            index !== -1&&(changedUsers[index] = modifiedItem);
        
            return changedUsers;
        };

        const modifiedUsers = changeUsers();
        evt.preventDefault();    
        store.dispatch(changeUser(modifiedUsers))

    }, [id, name, user, users]);

    return (
    <tr >
		<S.Cell>
            <center>
                <S.CellSpan>
                    <S.CellInput
                        value={id}
                        onChange={(evt) => setId(evt.target.value)}
                        type="text">
                    </S.CellInput>
                    &#8230;
                </S.CellSpan>
            </center>
        </S.Cell>
		<S.Cell>
            <S.CellSpan>
                <S.CellInput
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    type="text">
                </S.CellInput>
                &#8230;
            </S.CellSpan>
        </S.Cell>
        <S.Cell>
            <center>
                <Button
                style={{ color: 'green' }}
                onClick={handleChangeButton}
                >V</Button>
            </center>
        </S.Cell>
		<S.Cell>
            <center>
                <Button
                style={{ color: 'red' }}
                onClick={(evt)=>{handleDeleteButton(evt, user.id)}}
                >X</Button>
            </center>
        </S.Cell>
	</tr>)
};

export default TableCell;
