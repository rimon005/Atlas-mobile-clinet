import {React , useContext} from 'react';
import { AuthContext } from '../../contexts/Authprovider/AuthProvider';

const BookingModal = ({product}) => {
    const {productName , resale} = product
    const {user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target ;
        const userName = form.userName.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const phone = form.phone.value;
        const booking = {
            userName,
            email,
            productName,
            productPrice,
            phone
        }
        console.log(booking);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded-none">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-10'>
                        <input name='userName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-success w-full rounded-none" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-success w-full rounded-none" />
                        <input name='productName' type="text" defaultValue={productName} disabled className="input input-bordered input-success w-full rounded-none" />
                        <input name='productPrice' type="text" defaultValue={resale} disabled className="input input-bordered input-success w-full rounded-none" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-success w-full rounded-none" />
                        <br />
                        <input type="submit" value="Submit" className='btn btn-accent text-white ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;