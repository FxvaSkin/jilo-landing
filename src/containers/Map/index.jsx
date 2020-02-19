import React, { useState } from 'react'
import cx from 'classnames'
import styles from './map.module.css'
import './map.css'

import { Badge } from 'components/Badge'

import { ContainerIcon } from './ContainerIcon'

import accessToken from 'token'
import { branches } from './branches'
import { MarkerIcon } from './MarkerIcon'

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
