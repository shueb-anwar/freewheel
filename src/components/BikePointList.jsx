import BikePointItem from './BikePointItem';

const BikePointList = ({ bikepoints, onBikePointSelect }) => {
  if(!bikepoints.data) return null;
  
  if(bikepoints.data.length === 0) {
    return <div>
      <p>No bike points found for {bikepoints.term}</p>
    </div>
  }

  const renderedList = bikepoints.data.map(bikepoint => {
    return (
      <BikePointItem
        key={bikepoint.id}
        onBikePointSelect={onBikePointSelect}
        bikepoint={bikepoint}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default BikePointList;
