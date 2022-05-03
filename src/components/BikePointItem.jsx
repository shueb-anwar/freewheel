const BikePointItem = ({ bikepoint, onBikePointSelect }) => {
  const getId = (id) => id.split('_')[1]

  return (
    <div onClick={() => onBikePointSelect(bikepoint)} className="item" key={bikepoint.id}>
      <div className="content">
        {`${getId(bikepoint.id)}, ${bikepoint.commonName} (${bikepoint.lat}), ${bikepoint.lon})`}
      </div>
    </div>
  );
};

export default BikePointItem;
