
import { useContext } from "react";
import { Col, Dropdown, Row } from "react-bootstrap"
import MainContext from "../../context/MainContext";
import { galleryTypes } from "../../types/galleryTypes";

const DropdownNumeroImagenes = () => {

  // MainContext
  const {
    galleryDetails,
    galleryDispatch,
  } = useContext( MainContext );

  const handleSetNumeroImagenes = ( num ) => {
    if( num !== galleryDetails.items_per_page ){
      galleryDispatch( { type : galleryTypes.setNumeroImagenes, payload : num } )
    }
  }

  return (
    <Row className="align-items-center">

      <Col xs='auto'><span>Imágenes por página</span></Col>
      <Col xs='auto'>
        <Dropdown>
          <Dropdown.Toggle>
            {
              galleryDetails.items_per_page
            }
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {
              ( [...Array( 4 )] )
                .map( ( e, i ) =>
                  <Dropdown.Item
                    key={ i }
                    active={ galleryDetails.items_per_page === 24 + ( i * 12 ) }
                    onClick={ () => handleSetNumeroImagenes( 24 + ( i * 12 ) ) }
                  >{ 24 + ( i * 12 ) }</Dropdown.Item>
                )
            }
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  )

}

export default DropdownNumeroImagenes
