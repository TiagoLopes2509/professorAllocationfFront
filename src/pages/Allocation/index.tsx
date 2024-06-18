import Page from '../../components/Page';
import ListView from '../../components/ListView';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Allocation() {
  return (
    <Page title='Allocations'
    rightNode={
      <Button as={Link} to='/allocation/create' colorScheme='green' variant='outline' mr={10}>
        New Allocation
      </Button>
    }>
      <ListView
        resource='allocations'
        tableProps={{
          columns: [
            {
              key: 'id',
              label: 'ID',
            },
            {
              label: 'Day Of Week',
              key: 'day',
            },
            {
              key: 'startHour',
              label: 'Start Hour',
            },
            {
              key: 'endHour',
              label: 'End Hour',
            },
            {
              key: 'professor',
              label: 'Professor',
              render: (professor) => {
                return <span style={{ color: 'green' }}>{professor.name}</span>;
              },
            },
            {
              key: 'course',
              label: 'Course',
              render: (course) => {
                return <span style={{ color: 'green' }}>{course.name}</span>;
              },
            },
          ],
        }}
      />
    </Page>
  );
}

export default Allocation;
