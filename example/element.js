import '../src/nttdi-nowex-users-table';
import '../src/nttdi-nowex-users-detail'

const el = document.createElement('DIV');
document.body.appendChild(el);

el.innerHTML = `		
<nttdi-nowex-users-table></nttdi-nowex-users-table>
<nttdi-nowex-users-detail></nttdi-nowex-users-detail>
`;
