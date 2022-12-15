import Pagination from '@monorepo/shared/components/utilities/Pagination/Pagination';

const AppWrapper = () => {

  const handlePageChange = () => {
    console.log('handle');
  }

  return <>
    <Pagination activePage={1} pageSize={10} totalItems={30} onPageChange={handlePageChange}/>
  </>;
};

export default AppWrapper;
