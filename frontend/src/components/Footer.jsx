import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className='text-center text-lg-left mt-5 bg-body-tertiary'>
      <div className='text-center p-3 bg-body-secondary'>
        &copy; {new Date().getFullYear()} Copyright: Where What
      </div>
    </MDBFooter>
  );
}

export default Footer;
