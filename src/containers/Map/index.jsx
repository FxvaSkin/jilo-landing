import React, { useState } from 'react'
import cx from 'classnames'
import styles from './map.module.css'
import './popupStyles.css'

import ReactMapboxGl, {
  Layer,
  ZoomControl,
  RotationControl,
  Popup,
} from 'react-mapbox-gl'

import { Marker, Cluster } from 'react-mapbox-gl'

import { Badge } from 'components/Badge'

import accessToken from 'token'

const branches = [
  {
    key: 'anus',
    lat: 38.570597362250226,
    lng: 68.79770771265291,
    tel: '+7 (555) 333 22 22',
    address: 'Душанбе, 2',
  },
  {
    key: 'anus2',
    lat: 38.5705,
    lng: 68.797,
    tel: '+7 (555) 333 11 11',
    hours: [],
    address: 'Душанбе, 2',
  },
]

const Mapbox = ReactMapboxGl({ accessToken, scrollZoom: false })

const ContainerIcon = () => (
  <svg
    style={{
      stroke: '#000000',
      fill: '#ffdd2c',
      strokeWidth: '1px',
      width: '3em',
      height: '3em',
    }}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
  </svg>
)

const MarkerIcon = () => (
  <svg
    style={{
      stroke: '#000000',
      fill: '#ffdd2c',
      strokeWidth: '1px',
      width: '3em',
      height: '3em',
    }}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={coordinates}>
    <Badge value={pointCount}>
      <ContainerIcon />
    </Badge>
  </Marker>
)

const Map = () => {
  const [selected, setSelected] = useState()

  const handleClick = selected => {
    setSelected(selected)
  }

  const handleClose = () => {
    setSelected(null)
  }

  return (
    <Mapbox
      zoom={[13]}
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/outdoors-v10?optimize=true"
      className={styles.container}
      center={[68.79770771265291, 38.570597362250226]}
      flyToOptions={{ speed: 0 }}
      onClick={handleClose}
    >
      <Layer type="symbol" />
      <RotationControl position="top-left" style={{ marginTop: '1.5em' }} />
      <ZoomControl position="top-left" style={{ marginTop: '0.5em' }} />

      <Cluster radius={30} ClusterMarkerFactory={ClusterMarker}>
        {branches.map(branch => (
          <Marker
            key={branch.key}
            offset={{ bottom: [4, 12] }}
            coordinates={[branch.lng, branch.lat]}
            anchor="bottom"
            onClick={() => handleClick(branch)}
          >
            <MarkerIcon />
          </Marker>
        ))}
      </Cluster>

      {selected && (
        <Popup
          offset={{ bottom: [4, 12] }}
          className={cx(styles.popup)}
          coordinates={[selected.lng, selected.lat]}
        >
          <>
            <b>{selected.tel}</b>
            <br />
            <i>Закрыто. Откроется завтра в 9 утра.</i>
            <br />
            <i>09:00 - 19:00, без выходных</i>
            <p>{selected.address}</p>

            <button onClick={handleClose} className={styles.popupCloseButton}>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                shape-rendering="geometricPrecision"
                className={styles.popupCloseButtonIcon}
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </>
        </Popup>
      )}
    </Mapbox>
  )
}

export { Map }
