
import { useContext, useEffect } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';

import FotoItem from '../components/FotoItem';
import MainContext from '../context/MainContext';
import Paginacion from '../components/ui/Paginacion';

import { loadImagenes, loadPaises } from '../helpers/loadData';
import { galleryTypes } from '../types/galleryTypes';
import DropdownPaises from '../components/ui/DropdownPaises';
import DropdownOrdenImagenes from '../components/ui/DropdownOrdenImagenes';
import DropdownNumeroImagenes from '../components/ui/DropdownNumeroImagenes';

const FotosScreen = () => {

  // MainContext
  const {
    paises, setPaises,
    imagenes, setImagenes,
    galleryDetails, galleryDispatch,
  } = useContext( MainContext );

  useEffect( () => {

    if( paises.length === 0 ){
      const cargarPaises = async () => {
        const datos = await loadPaises();
        setPaises( datos.paises );
      }
      cargarPaises();
    }
    else
    if( imagenes.length === 0 ){
      const cargarImagenes = async () => {
        const datos = await loadImagenes();
        // Escribimos el State de las imágenes
        setImagenes( datos.imagenes );
        // Calculamos la cantidad total de páginas
        galleryDispatch( {
          type : galleryTypes.setTotalPages,
          payload : datos.imagenes.length
        } );
        // Las imágenes en cuestión son inicialmente una copia de todas las imágenes
        // ordenadas conológicamente de acuerdo al filtro
        galleryDispatch( {
          type : galleryTypes.setCurrentImages,
          payload : datos.imagenes
        } );
      }
      cargarImagenes();
    }

  }, [ paises, setPaises, imagenes, setImagenes, galleryDispatch ] );

  return (
    <Container>
      <Row>
        <Col>
          <h1>Galería de Imágenes</h1>
        </Col>
      </Row>

      
      <Row className="justify-content-end">

        {/* Select del número de imágenes por página */}
        <Col xs='auto'>
          <DropdownNumeroImagenes />
        </Col>

        {/* Select del orden ( cronológico ) */}
        <Col xs='auto'>
          <DropdownOrdenImagenes />
        </Col>

        {/* Select de los países */}
        <Col xs='auto'>
          <DropdownPaises />
        </Col>
      </Row>
      
      {/* Retícula de imágenes */}
      <Row className='g-2'>
        {
          galleryDetails.current_images.slice( ( galleryDetails.current_page - 1 ) * galleryDetails.items_per_page, galleryDetails.current_page * galleryDetails.items_per_page ).map( ( img ) => <FotoItem key={ img.ID } imgInfo={ img } /> )
        }
      </Row>

      {/* Paginación */}
      {
        galleryDetails.total_pages > 1 &&
        <Row className="justify-content-center">
          <Col xs='auto'>
            <Paginacion
              ttl_pags={ galleryDetails.total_pages }
              curr_pag={ galleryDetails.current_page }
              dispatch={ galleryDispatch }
            />
          </Col>
        </Row>
      }
    </Container>
  )

}

export default FotosScreen
