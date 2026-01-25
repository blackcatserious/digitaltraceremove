import { useEffect, useRef } from 'react'
import './App.css'

const MAPS_API_KEY = 'YOUR_API_KEY_HERE'

export const CONFIGURATION = {
  locations: [
    {
      title: 'Escondido Grill',
      address1: '601 Geary St',
      address2: 'San Francisco, CA 94102, USA',
      coords: { lat: 37.7866, lng: -122.4133 },
      placeId: 'ChIJ5Sz52pGAhYAR1raOybzuDp8',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '747 3rd St',
      address2: 'San Francisco, CA 94107, USA',
      coords: { lat: 37.7785, lng: -122.392 },
      placeId: 'ChIJeyVKpNd_j4ARLUED10OEr1s',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '1512 Stockton St',
      address2: 'San Francisco, CA 94133, USA',
      coords: { lat: 37.7998, lng: -122.4089 },
      placeId: 'ChIJgYMdZvGAhYAR2ifWKOR5ek8',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '50 Clement St',
      address2: 'San Francisco, CA 94118, USA',
      coords: { lat: 37.7833, lng: -122.46 },
      placeId: 'ChIJk_FWiDmHhYARgDVidBVO_RM',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '3755 Noriega St',
      address2: 'San Francisco, CA 94122, USA',
      coords: { lat: 37.7529, lng: -122.5042 },
      placeId: 'ChIJ_2knd4-HhYARI5PPNZ7aasA',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '2619 Mission St',
      address2: 'San Francisco, CA 94110, USA',
      coords: { lat: 37.7552, lng: -122.4184 },
      placeId: 'ChIJSwWfLT9-j4ARMGcgMs-tBRE',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '4935 Mission St',
      address2: 'San Francisco, CA 94112, USA',
      coords: { lat: 37.7194, lng: -122.4386 },
      placeId: 'ChIJtYdd3IR-j4ARSybFjVnGTBw',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Escondido Grill',
      address1: '6202 3rd St',
      address2: 'San Francisco, CA 94124, USA',
      coords: { lat: 37.7223, lng: -122.396 },
      placeId: 'ChIJ0VRZVB9_j4ARaB7r66H67eg',
      actions: [
        {
          label: 'Reserve a table',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: '',
  },
  mapsApiKey: MAPS_API_KEY,
  capabilities: {
    input: true,
    autocomplete: true,
    directions: false,
    distanceMatrix: true,
    details: false,
    actions: true,
  },
}

function App() {
  const apiLoaderRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const scriptId = 'gmpx-extended-component-library'

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'module'
      script.src =
        'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js'
      document.body.appendChild(script)
    }

    if (apiLoaderRef.current) {
      apiLoaderRef.current.setAttribute('key', MAPS_API_KEY)
    }

    const configureLocator = async () => {
      await customElements.whenDefined('gmpx-store-locator')
      const locator = document.querySelector(
        'gmpx-store-locator',
      ) as GmpxStoreLocatorElement | null
      if (locator) {
        locator.configureFromQuickBuilder(CONFIGURATION)
      }
    }

    void configureLocator()
  }, [])

  return (
    <div className="locator-page">
      <gmpx-api-loader
        ref={apiLoaderRef}
        solution-channel="GMP_QB_locatorplus_v11_cABDF"
      ></gmpx-api-loader>
      <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
    </div>
  )
}

export default App
