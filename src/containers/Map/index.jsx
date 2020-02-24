import React, { useState } from 'react'
import cx from 'classnames'
import styles from './map.module.css'
import './map.css'

import { Badge } from 'components/Badge'

import { ContainerIcon } from './ContainerIcon'

import accessToken from 'token'
import { branches } from './branches'
import { MarkerIcon } from './MarkerIcon'

const PhoneIcon = props => (
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
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const AddressIcon = props => (
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
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = props => (
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
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

let ReactMapboxGl = {}
let Layer, ZoomControl, RotationControl, Popup, Marker, Cluster

if (typeof window !== `undefined`) {
  ReactMapboxGl = require('react-mapbox-gl')
  Layer = ReactMapboxGl.Layer
  ZoomControl = ReactMapboxGl.ZoomControl
  RotationControl = ReactMapboxGl.RotationControl
  Popup = ReactMapboxGl.Popup
  Marker = ReactMapboxGl.Marker
  Cluster = ReactMapboxGl.Cluster
}

const Mapbox =
  ReactMapboxGl.Map &&
  ReactMapboxGl.Map({
    accessToken,
    scrollZoom: false,
  })

const ClusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={coordinates}>
    <Badge value={pointCount}>
      <ContainerIcon />
    </Badge>
  </Marker>
)

const Map = () => {
  const [selected, setSelected] = useState()

  if (!Mapbox) return <div />

  const handleClick = selected => {
    setSelected(selected)
  }

  const handleClose = () => {
    setSelected(null)
  }

  return (
    <Mapbox
      zoom={[12]}
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/outdoors-v10?optimize=true"
      center={[68.762, 38.535]}
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
            <ul>
              {selected.tels &&
                selected.tels.map(tel => (
                  <li key={tel} className={styles.phone}>
                    <a href={`tel:${tel}`}>
                      <PhoneIcon className={styles.icon} /> {tel}
                    </a>
                  </li>
                ))}
            </ul>
            <p className={styles.address}>
              <AddressIcon className={styles.icon} />
              {selected.address}
            </p>
            <p className={styles.clock}>
              <ClockIcon className={styles.icon} />
              {selected.hours}
            </p>

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
