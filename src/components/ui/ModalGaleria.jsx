
import { useContext } from "react";
import { Modal, Image } from "react-bootstrap"
import MainContext from "../../context/MainContext";
import { htmlDecode } from "../../helpers/htmlEntities";

const ModalGaleria = () => {

  const { showGalleryModal, handleCloseGalleryModal, imgInfoModal } = useContext( MainContext );

  const {
    // ID,
    ciudad,
    estado,
    pais,
    // pais_slug,
    titulo,
    contenido,
    anio,
    // mes,
    mes_str,
    dia,
    // hora,
    // minutos,
    // fecha,
    image_url_8,
    // thumb_id,
    // thumb_url_2,
    // thumb_url_4
  } = imgInfoModal;

  let imgSize = image_url_8?.match( /(\d+)x(\d+)/g );
  let isImgH = false;
  if ( imgSize ){
    imgSize = imgSize[0];
    imgSize = imgSize.split( 'x' );
    isImgH = parseInt( imgSize[0], 10 ) > parseInt( imgSize[1], 10 ) ? true : false;
  }

  return (
    <Modal
      size='lg'
      id='ModalGaleria'
      show={ showGalleryModal }
      onHide={ handleCloseGalleryModal }
      centered
      className="ModalGaleria"
    >
      <Modal.Header closeButton>
        <Modal.Title>{ htmlDecode( titulo ) }</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-0'>
        <Image fluid={ true } className={ `mx-auto d-block m-0 ${ isImgH ? 'w-100' : '' }` } alt={ imgInfoModal.titulo } src={ imgInfoModal.image_url_8 } />
      </Modal.Body>
      <Modal.Footer className='ModalGaleriaFooter pt-1'>
        {
          contenido?.length
            ? <div className='ModalGaleriaContenido p-4 pb-3' dangerouslySetInnerHTML={ { __html : htmlDecode( contenido ) } } />
            : null
        }
        <div className='ModalGaleriaLugarFecha'>
          <p>{ `${ ciudad !== '' ? htmlDecode( ciudad ) + ', ' : '' }${ estado !== '' ? htmlDecode( estado ) + ', ' : '' }${ pais }` }</p>
          <p>{ `${ dia } de ${ mes_str }, ${ anio }` }</p>
        </div>
        {/* { JSON.stringify( imgInfoModal ) } */}
      </Modal.Footer>
    </Modal>
  )

}

export default ModalGaleria;
