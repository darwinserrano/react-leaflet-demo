import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SubIList from './SubIList';
import { toggleAll } from '../../redux/reducers/cities/cities-actions';

export class ListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      layerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isActived: PropTypes.bool
    }),
    toggleAll: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange() {
    this.props.toggleAll(this.props.item.layerId)
  }

  render() {
    const { item } = this.props

    return (
      <li>
        <input type="checkbox" id={item.layerId} checked={item.isActived} onChange={this.handleInputChange} />
        <label htmlFor={item.layerId}>{item.name}</label>
        <SubIList data={item.cities} />
      </li>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  toggleAll: toggleAll
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
