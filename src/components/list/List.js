import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadData } from '../../redux/reducers/cities/cities-actions';
import ListItem from './ListItem';
import './List.css'

export class List extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const { data } = this.props

    return (
      <ul className="List">
        {data.map(row => (<ListItem key={row.layerId} item={row} />))}
      </ul>
    )
  }
}

const mapStateToProps = ({ citiesStore }) => ({
  data: citiesStore.items
})

const mapDispatchToProps = {
  loadData: loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
