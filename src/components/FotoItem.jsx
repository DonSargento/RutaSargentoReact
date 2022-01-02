
import PropTypes from 'prop-types'
import { Col, Image } from 'react-bootstrap'

const FotoItem = ( { imgInfo } ) => {

  const {
    ID,
    ciudad,
    estado,
    pais,
    pais_slug,
    titulo,
    contenido,
    anio,
    mes,
    mes_str,
    dia,
    hora,
    minutos,
    fecha,
    image_url_6,
    thumb_id,
    thumb_url_2,
    // thumb_url_4
  } = imgInfo;

  return (
    <Col xs={6} sm={4} md={3} lg={2} >
      <div>
        <Image fluid={ true } src={ thumb_url_2 } alt={ titulo } className='w-100' />
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
              image_url_6 : PropTypes.string.isRequired,
              thumb_id : PropTypes.number.isRequired,
              thumb_url_2 : PropTypes.string.isRequired,
              // thumb_url_4 : PropTypes.string.isRequired,
            } )
}

export default FotoItem
