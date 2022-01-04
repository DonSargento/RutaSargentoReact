
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { Col, Image } from 'react-bootstrap'
import MainContext from '../context/MainContext';
import { htmlDecode } from '../helpers/htmlEntities';

const FotoItem = ( { imgInfo } ) => {

  const { paises, handleShowGalleryModal } = useContext( MainContext );

  const {
    // ID,
    // ciudad,
    // estado,
    pais,
    pais_slug,
    titulo,
    // contenido,
    anio,
    mes,
    // mes_str,
    dia,
    // hora,
    // minutos,
    // fecha,
    // image_url_8,
    // thumb_id,
    // thumb_url_2,
    thumb_url_4
  } = imgInfo;

  const banderaURL = paises.find( ( p ) => p.slug === pais_slug ).bandera_url;

  // console.log( imgInfo.titulo );

  return (
    <Col xs={ 6 } sm={4} md={3} xl={2} >
      <div className="FotoItem" onClick={ () => handleShowGalleryModal( imgInfo ) }>
        <Image className="FotoItemThumb" fluid={ true } src={ thumb_url_4 } alt={ titulo } />
        <div className="FotoItemInfo">
          <Image className="FotoItemFlag mx-auto" src={ banderaURL } alt={ pais } />
          <h4>{ htmlDecode( titulo ) }</h4>
          {/* <p className='FotoItemCiudadEstado'>{ ciudad },<br/>{ estado }</p> */}
          {/* <p className='FotoItemPais'>{ pais }</p> */}
          <p className='FotoItemFecha'>{ `${ String( dia ).padStart( 2, 0 ) }/${ String( mes ).padStart( 2, 0 ) }/${ anio }` }</p>
        </div>
      </div>
    </Col>
  )

}

FotoItem.defaultProps = {
  
};

FotoItem.propTypes = {
  imgInfo : PropTypes.shape( {
              ID : PropTypes.number.isRequired,
              ciudad : PropTypes.string.isRequired,
              estado : PropTypes.string.isRequired,
              pais : PropTypes.string.isRequired,
              pais_slug : PropTypes.string.isRequired,
              titulo : PropTypes.string.isRequired,
              contenido : PropTypes.string.isRequired,
              anio : PropTypes.number.isRequired,
              mes : PropTypes.number.isRequired,
              mes_str : PropTypes.string.isRequired,
              dia : PropTypes.number.isRequired,
              hora : PropTypes.number.isRequired,
              minutos : PropTypes.number.isRequired,
              fecha : PropTypes.string.isRequired,
              // image_url_6 : PropTypes.string.isRequired,
              image_url_8 : PropTypes.string.isRequired,
              thumb_id : PropTypes.number.isRequired,
              // thumb_url_2 : PropTypes.string.isRequired,
              thumb_url_4 : PropTypes.string.isRequired,
            } )
}

export default FotoItem
