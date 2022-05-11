import Appbar from 'muicss/lib/react/appbar';
import { Container } from 'muicss/react';
import NewUserForm from './components/new-user-form/new-user-form';
import FindUserForm from './components/find-user-form/find-user-form';
import UsersTab from './components/users-tab/users-tab';
import {useSelector} from 'react-redux';
import { getUsers } from '../../store/selector';

const useAppSelector = useSelector;

function Main() {
    const users = useAppSelector(getUsers);

    return (
        <>
            <Appbar style={{ display: 'flex' }}>
                <h1 style={{ textAlign: 'center', margin: 'auto' }}>CRUD</h1>
            </Appbar>
            <Container>
                <NewUserForm />
                <FindUserForm users={users}/>                
                <UsersTab users={users}/>
            </Container>

        </>
    );
}

export default Main;
