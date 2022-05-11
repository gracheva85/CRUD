import styled from 'styled-components';

const UserTable = styled.table` 
  	margin-bottom: 20px;
	  border: 1px solid	#E8E8E8;
	  border-top: 1px solid	#E8E8E8;
	  border-collapse: collapse;
    text-align: left;
`;

const TableHeader = styled.th`
    font-weight: bold;
    padding: 15px;
    background:	#E8E8E8;
    border: none;
    border-bottom: 1px solid #E8E8E8;
`;

export {UserTable, TableHeader};