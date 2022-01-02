
export const loadPaises = async () => {
  const dataURL = `https://ruta.donsargento.com/wp-admin/admin-ajax.php?action=rutasgt_fotografias&paises=1`;
  const response = await fetch( dataURL );
  const data = await response.json();
  return data;
}

export const loadImagenes = async () => {
  const dataURL = `https://ruta.donsargento.com/wp-admin/admin-ajax.php?action=rutasgt_fotografias&imagenes=1`;
  const response = await fetch( dataURL );
  const data = await response.json();
  return data;
}