import TableCell from './components/table-cell/table-cell';
import * as S from './users-tab.styled';

function UsersTab(props) {
	const users = props.users;

    if (users.length > 0) 
	return (
        <>
			<br/>
			<h2>User list:</h2>
            <S.UserTable>
	            <thead>
		            <tr >
			            <S.TableHeader>&nbsp;Id</S.TableHeader>
			            <S.TableHeader>&nbsp;Name</S.TableHeader>
						<S.TableHeader><center>Save</center></S.TableHeader>
						<S.TableHeader><center>Delete</center></S.TableHeader>
		            </tr>

	            </thead>
	            <tbody>
				{
					users.map((user, index)=>
						<TableCell key={index} users={users} user={user} />)
				}
	            </tbody>
            </S.UserTable>
        </>
    );

	return (
		<>
			<br/>
			<h2>There are no users yet...</h2>
		</>
	)
}

export default UsersTab;