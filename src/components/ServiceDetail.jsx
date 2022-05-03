const ServiceDetail = ({ service, className }) => {
  if (!service) {
    return <section className={className}>Please select a service from the list</section>;
  }

  const disruptions = service.lineStatuses.filter(status => status.statusSeverity !== 10)

  return (
    <section className={className}>
      <div className="ui segment">
        <h4 className="ui header">{disruptions.length ? 'Service currently suffering disruptions' : 'No service disruptions'}</h4>
        {disruptions.map((disruption) => (
          <p key={disruption.id}>{disruption.reason}</p>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetail;
