import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SubItem from './SubItem';

export class SubIList extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const { data } = this.props
    return (
      <ul className="List">
        {data.map(row => (<SubItem key={row.layerId} item={row} />))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubIList)
