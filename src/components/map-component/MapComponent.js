import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import L from 'leaflet'
import './MapComponent.css'
import { setMap } from '../../redux/reducers/map/map-actions';

export class MapComponent extends Component {
  static propTypes = {
    setMap: PropTypes.func
  }

  componentDidMount() {
    const map = L.map('map').setView([-33.442701, -70.665494], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
      layers: 'nexrad-n0r-900913',
      format: 'image/png',
      transparent: true,
      attribution: "Weather data © 2012 IEM Nexrad"
    });

    nexrad.addTo(map)

    this.props.setMap(map)
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
  }

  render() {
    return (
      <div id="map" className="MapComponent"></div>
    )
  }
}

const mapStateToProps = ({ mapStore }) => ({
  map: mapStore.map
})

const mapDispatchToProps = dispatch => {

  return {
    setMap: (map) => {
      dispatch(setMap(map))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent)
