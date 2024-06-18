import Page from '../../components/Page';
import ListView from '../../components/ListView';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Professor() {
  return (
    <Page 
    title='Professors' 
    rightNode={
      <Button as={Link} to='/professor/create' colorScheme='green' variant='outline' mr={10}>
        New Professor
      </Button>
    }>
      
      <ListView
        resource='professors'
        tableProps={{
          columns: [
            {
              key: 'id',
              label: 'ID',
            },
            {
              key: 'name',
              label: 'Name',
            },
            {
              key: 'cpf',
              label: 'CPF',
            },
            {
              key: 'department',
              label: 'Department',
              render: (department) => {
                return <span style={{ color: 'green' }}>{department.name}</span>;
              },
            },
          ],
        }}
      />
    </Page>
  );
}

export default Professor;
