
import { galleryTypes } from "../types/galleryTypes";

export const galleryInit = () => {

  return {
    current_images  : [],
    current_page    : 1,
    total_pages     : 0,
    items_per_page  : 36,
    country_name    : 'Todos los países',
    country_filter  : 'all', // slug
    order_filter    : 'asc',
  }

}

export const galleryReducer = ( state, action ) => {

  switch( action.type ){
    
    case galleryTypes.setCurrentImages :
      return {
        ...state,
        current_images : orderImagesByFilter( action.payload, state.order_filter ),
      }

    case galleryTypes.setTotalPages :
      return {
        ...state,
        total_pages : Math.ceil( action.payload / state.items_per_page ),
      };

    case galleryTypes.gotoPage :
      return {
        ...state,
        current_page : action.payload,
      }
    
    case galleryTypes.resetCurrentPage :
      return {
        ...state,
        current_page : 1,
      }
    
    case galleryTypes.setCountryFilter :
      return {
        ...state,
        current_page : 1,
        total_pages : Math.ceil( action.payload.images.length / state.items_per_page ),
        current_images : orderImagesByFilter( action.payload.images, state.order_filter ),
        country_filter : action.payload.country,
        country_name : action.payload.nombre,
      }

    case galleryTypes.setOrderFilter :
      return {
        ...state,
        current_page : 1,
        order_filter : action.payload,
        current_images : orderImagesByFilter( state.current_images, action.payload ),
      }
    
    case galleryTypes.setNumeroImagenes :
      return {
        ...state,
        current_page : 1,
        items_per_page : action.payload,
        total_pages : Math.ceil( state.current_images.length / action.payload ),
      }

    default : return state;

  }

}

const orderImagesByFilter = ( images, orden ) => {
  if( orden === 'asc' ) {
    return images.sort( ( a, b ) => a.time - b.time );
  } else {
    return images.sort( ( b, a ) => a.time - b.time );
  }
}
