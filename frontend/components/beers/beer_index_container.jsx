import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchBeers } from '../../actions/beer_actions';
import BeerIndexItem from './beer_index_item';

const msp = state => {
  return {
    beers: Object.values(state.entities.beers),
  }
}

const mdp = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
  }
}

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const beers = this.props.beers.map(beer => {
      return (
        <BeerIndexItem key={beer.id} beer={beer} />
      )
    })
    return (
      <div className="beer-list">
        {beers}
      </div>
    )
  }
}

export default connect(msp, mdp)(BeerIndex);