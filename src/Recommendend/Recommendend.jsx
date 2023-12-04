
import Buttons from '../components/Buttons'
import './Recommendend.css'
const Recommendend = ({handleClick}) => {
  return (
    <> 
    <h2 className='recommended-title'>recommended</h2>
    <div className="recommended-flex">
    <Buttons onClickHandler={handleClick} value='' title='All Products'/>
    <Buttons onClickHandler={handleClick} value='Nike' title='Nike'/>
    <Buttons onClickHandler={handleClick} value='Adidas' title='Adidas'/>
    <Buttons onClickHandler={handleClick} value='Puma' title='Puma'/>
    <Buttons onClickHandler={handleClick} value='Vans' title='Vans'/>
    </div> 

    </>
  )
}

export default Recommendend
