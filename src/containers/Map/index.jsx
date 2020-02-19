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
    lat: 38.524316,
    lng: 68.76278,
    tel: 'Тел: 93-999-00-61/90-999-00-61',
    hours: `Режим работы:
Пн-Сб: 8-17
Вс: 9-14`,
    address: 'г.Душанбе, ул. Н.Карабаева 92/2',
  },
  {
    key: 'anus2',
    lat: 38.554818,
    lng: 68.762541,
    tel: 'Тел: 93-300-09-99/90-993-09-99',
    hours: `Режим работы:
Пн-Сб: 8-17
Вс: 9-14`,
    address: 'г.Душанбе, ул. Н.Карабаева 6',
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
            <i>{selected.hours}</i>
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
