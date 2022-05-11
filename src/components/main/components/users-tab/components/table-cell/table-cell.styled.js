import styled from 'styled-components';

const Cell = styled.td`
  	border: 1px solid	#E8E8E8;
  	border-bottom: 1px solid	#E8E8E8;
`;

const CellInput = styled.input`
	padding-left: 12px;
	border: none;
	background: url(my-app/public/pencil.svg) no-repeat center right;
	background-size: auto 90%;
`;

const CellSpan = styled.span`
  	color:	#a9a9a9;
  	padding: 5px;
`;

export {Cell, CellInput, CellSpan};
