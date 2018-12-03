import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DataApi } from '../../api/DataApi';
import { toggle } from '../../redux/reducers/cities/cities-actions';
import Point from '../layers/Point';

export class SubItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      layerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isActived: PropTypes.bool
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      dataWeather: null,
      thisIsActived: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }


  async componentDidUpdate(prevProps) {
    const { item } = this.props
    if (prevProps.item.isActived !== item.isActived && item.isActived) {
      const dataWeather = await DataApi.getWeather(item.name)
      if (dataWeather.status === 200)
        this.setState({ dataWeather: dataWeather.data })
    }
  }

  handleInputChange() {
    this.setState({ thisIsActived: !this.state.thisIsActived })
    this.props.toggle(this.props.item.layerId)
  }

  render() {
    const { item } = this.props
    const { dataWeather, thisIsActived } = this.state
    console.log(dataWeather);

    return (
      <li>
        <input type="checkbox" id={item.layerId} name={item.layerId} checked={thisIsActived} onChange={this.handleInputChange} />
        <label htmlFor={item.layerId}>{item.name}</label>
        {dataWeather && <Point data={dataWeather} isActived={item.isActived} layerId={item.layerId} />}
      </li>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  toggle: toggle
}

export default connect(mapStateToProps, mapDispatchToProps)(SubItem)
