
import { useContext } from "react";
import { Dropdown } from "react-bootstrap"
import MainContext from "../../context/MainContext";
import { galleryTypes } from "../../types/galleryTypes";

const DropdownOrdenImagenes = () => {

  // MainContext
  const {
    galleryDetails,
    galleryDispatch,
  } = useContext( MainContext );

  const handleSetOrderFilter = ( order ) => {
    if( order !== galleryDetails.order_filter ){
      galleryDispatch( { type : galleryTypes.setOrderFilter, payload : order } )
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        {
          galleryDetails.order_filter === 'asc' ? 'Más antiguas primero' : 'Más recientes primero'
        }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={ () => handleSetOrderFilter( 'desc' ) }
          active={ galleryDetails.order_filter === 'desc' }
          >Más recientes primero</Dropdown.Item>
        <Dropdown.Item
          onClick={ () => handleSetOrderFilter( 'asc' ) }
          active={ galleryDetails.order_filter === 'asc' }
        >Más antiguas primero</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownOrdenImagenes
