import { useContext } from "react";
import { Row, Col, Dropdown } from "react-bootstrap"
import MainContext from "../../context/MainContext";
import { galleryTypes } from "../../types/galleryTypes";

const DropdownPaises = () => {

  // MainContext
  const {
    paises,
    imagenes,
    galleryDetails,
    galleryDispatch,
  } = useContext( MainContext );

  // const selCountryRef = useRef( null );

  // Select ( Dropdown ) del País
  const handleSelectCountry = ( slug, nombre ) => {

    if( slug !== galleryDetails.country_filter ){

      const filteredImgs = slug === 'all'
        ? imagenes
        : imagenes.filter( ( img ) => img.pais_slug === slug );
      
      galleryDispatch( {
        type : galleryTypes.setCountryFilter,
        payload : {
          images : filteredImgs,
          country : slug,
          nombre : nombre,
        }
      } );

    }

    // setTimeout( () => selCountryRef.current.blur(), 100 );

  }
  
  return (
    <Row id='DropdownPaises' className="align-items-center justify-content-center">
      <Col xs='auto' className='pe-0'><span>País</span></Col>
      <Col xs='auto'>
        <Dropdown>
          <Dropdown.Toggle
            // ref={ selCountryRef }
          >{
            galleryDetails.country_name
          }</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={ () => handleSelectCountry( 'all', 'Todos' ) }
              active={ galleryDetails.country_filter === 'all' }
            >Todos<span>{ paises.reduce( ( prev_val, curr_val ) => prev_val + curr_val.total, 0 ) }</span></Dropdown.Item>
            <Dropdown.Divider />
            {
              // Enlistamos todos los países
              paises.map( ( p ) => <Dropdown.Item
                key={ p.ID }
                onClick={ () => handleSelectCountry( p.slug, p.nombre ) }
                active={ galleryDetails.country_filter === p.slug }
              >{ p.nombre }<span>{ p.total }</span></Dropdown.Item> )
            }
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  )
}

export default DropdownPaises
