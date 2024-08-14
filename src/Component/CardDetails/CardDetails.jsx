import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from '../../utility/backEnd';

const CardDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);

    const { image, description, title, amount, title_text_color, background_color } = detail;

    const handleToast = () =>{
        saveApplication(idInt);
        toast(`You Donate $${amount} Successfully`)
    }
    return (
        <div className='container mx-auto'>

            <div className=''>
                <img className='w-full py-24' src={image}
                    alt="" />
            </div>

            <div className='bg-black bg-opacity-25 p-9 -mt-[220px] relative'>
                <button onClick={handleToast} className={`${title_text_color} ${background_color} font-semibold text-xl px-6 py-3 rounded hover:bg-gray-700`}>Donate ${amount}</button>
            </div>
            <div className='mt-28'>
                <h1 className='text-4xl font-bold my-6'>{title}</h1>
                <p>{description}</p>
            </div>
            <ToastContainer/>
        </div>
    );
};

CardDetails.propTypes = {

};

export default CardDetails;