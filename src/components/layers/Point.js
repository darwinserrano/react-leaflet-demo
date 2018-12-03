import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import L from 'leaflet'

export class Point extends Component {
  static propTypes = {
    isActived: PropTypes.bool,
    data: PropTypes.shape({
      lon: PropTypes.number,
      lat: PropTypes.number,
      weather: PropTypes.array
    })
  }

  constructor(props) {
    super(props)

    this.state = {

    }

    this.activeLayer = this.activeLayer.bind(this)
    this.deactiveLayer = this.deactiveLayer.bind(this)
    this.createMarker = this.createMarker.bind(this)
  }


  componentDidMount() {
    const { isActived } = this.props
    if (isActived) {
      this.activeLayer()
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { isActived } = this.props
    if (prevProps.isActived !== isActived) {
      if (isActived) {
        this.activeLayer()
      } else {
        this.deactiveLayer()
      }
    }
  }

  activeLayer() {
    const { map, data } = this.props
    this.layer = L.layerGroup().addTo(map)
    this.layer.addLayer(this.createMarker(data))
  }

  deactiveLayer() {
    this.layer.removeLayer(this.marker)
  }

  createMarker({ coord, main }) {

    this.marker = L.marker([coord.lat, coord.lon]);
    const records = Object.keys(main).map(key => `<li>${key}: ${main[key]}</li>`).join('')
    const popup = `<div>
      <ul>
      ${records}
      </ul>
    </div>`

    this.marker.bindPopup(popup)

    return this.marker
  }

  render() {
    return null
  }
}

const mapStateToProps = ({ mapStore }) => ({
  map: mapStore.map
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Point)
