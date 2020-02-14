import React from 'react'

import ReactMapboxGl, {
  Layer,
  ZoomControl,
  RotationControl,
  Popup,
} from 'react-mapbox-gl'

import accessToken from 'token'

const Mapbox = ReactMapboxGl({ accessToken, scrollZoom: false })

const containerStyle = {
  width: '100%',
  minHeight: '30em',
  height: '70vh',
}

const Map = () => {
  return (
    <Mapbox
      onClick={(m, event) => console.log('lt', event.lngLat)}
      zoom={[13]}
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/outdoors-v10?optimize=true"
      containerStyle={containerStyle}
      center={[68.79770771265291, 38.570597362250226]}
      // onError={(_, error) => setError(error)}
      flyToOptions={{ speed: 0 }}
    >
      <Layer type="symbol" />
      <RotationControl />
      <ZoomControl />
      {/* <Markers
        facilities={facilities}
        selectedFacility={selectedFacility}
        onSelectFacility={handleSelectFacility}
      /> */}

      {/* {selectedFacility && (
        <Popup
          className={'popup-custom'}
          coordinates={[selectedFacility.lng, selectedFacility.lat]}
        >
          <FacilityCard
            facility={selectedFacility}
            onClose={handleClosePopup}
          />
        </Popup>
      )} */}
    </Mapbox>
  )
}

export { Map }
