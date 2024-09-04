import Breadcrumb from 'react-bootstrap/Breadcrumb';

function CurrentPagePath() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#" className='fs-5'>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" className='fs-5'>
        Components
      </Breadcrumb.Item>
      <Breadcrumb.Item active className='fs-4'>Examples</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default CurrentPagePath;