export function tri(a, b) {
  switch (filter) {
    case 'date_desc':
      goods.sort((a, b) => {
        return new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
      })
      break
    case 'date_asc':
      goods.sort((a, b) => {
        return new Date(a.DATE_OFFRE._cdata) - new Date(b.DATE_OFFRE._cdata)
      })
      break
    case 'prix_asc':
    case 'prix_desc':
    case 'surface_asc':
    case 'surface_desc':
  }
}
