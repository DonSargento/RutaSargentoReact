
import PropTypes from 'prop-types'
import { Row, Col, Pagination } from 'react-bootstrap'
import { galleryTypes } from '../../types/galleryTypes';

const Paginacion = ( { ttl_pags, curr_pag, dispatch } ) => {

  // onClick={ () => galleryDispatch( {
  //     type : galleryTypes.gotoPage,
  //     payload : i + 1
  //   } )
  // }

  const handlePrevPage = ( evt ) => {
    evt.currentTarget.blur();
    handleGotoPage( curr_pag - 1 );
  }
  const handleGotoPage = ( pag ) => {
    window.scrollTo( 0, 0 );
    dispatch( {
      type : galleryTypes.gotoPage,
      payload : pag
    } );
  }
  const handleNextPage = ( evt ) => {
    evt.currentTarget.blur();
    handleGotoPage( curr_pag + 1 );
  }

  const createLongPagination = () => {

    let paginacion = [];

    // Generamos el botón para navegar a la primera página
    if( curr_pag >= 4 ){
      paginacion = [
        ...paginacion,
        <Pagination.Item
          key={ 1 }
          onClick={ () => handleGotoPage( 1 ) }
        >1</Pagination.Item>
      ];
      if( curr_pag > 4 ){
        paginacion = [ ...paginacion, <Pagination.Ellipsis key='ell_s' disabled /> ];
      }
    }

    // Generamos 2 botones antes y 2 botones después de la página actual
    for( let i = 0; i < 5; i++ ){
      if( curr_pag + i - 2 > 0 && curr_pag + i - 2 <= ttl_pags ){
        paginacion = [
          ...paginacion,
          <Pagination.Item
            key={ curr_pag + i - 2 }
            active={ curr_pag === curr_pag + i - 2 }
            onClick={ () => handleGotoPage( curr_pag + i - 2 ) }
          >{ curr_pag + i - 2 }</Pagination.Item>
        ];
      }
    }

    // Generamos el botón para navegar a la última página
    if( curr_pag <= ttl_pags - 3 ){
      if( curr_pag < ttl_pags - 3 ){
        paginacion = [ ...paginacion, <Pagination.Ellipsis key='ell_e' disabled /> ];
      }
      paginacion = [
        ...paginacion,
        <Pagination.Item
          key={ ttl_pags }
          onClick={ () => handleGotoPage( ttl_pags ) }
        >{ ttl_pags }</Pagination.Item>
      ]
    }

    return paginacion;

  }

  return (
    <Row className="justify-content-center Paginacion">
      <Col xs='auto'>
        <Pagination size='sm' className='my-0'>
          { curr_pag > 1 && <Pagination.Prev
            key='prev'
            onClick={ handlePrevPage }
          /> }
          {
            ttl_pags <= 10
              // En caso de que sean menos de 10 páginas
              ? ( [...Array( ttl_pags )] ).map( ( e, i ) =>
                <Pagination.Item
                  key={ i + 1 }
                  active={ curr_pag === i + 1 }
                  onClick={ () => handleGotoPage( i + 1 ) }
                >{ i + 1 }</Pagination.Item>
              )
              // Cuando sean más de 10 páginas
              : createLongPagination()
          }
          { curr_pag < ttl_pags && <Pagination.Next
            key='next'
            onClick={ handleNextPage }
          /> }
        </Pagination>
      </Col>
    </Row>
  )
}

Paginacion.defaultProps = {
  ttl_pags : 1,
  curr_pag : 1
};

Paginacion.propTypes = {
  ttl_pags : PropTypes.number.isRequired,
  curr_pag : PropTypes.number.isRequired,
  dispatch : PropTypes.func.isRequired,
}

export default Paginacion
