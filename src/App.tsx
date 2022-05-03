import { useEffect, useState } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import BikePointList from './components/BikePointList';
import Sidebar from './components/Sidebar'
import ServiceDetail from './components/ServiceDetail'
import { getServices, getBikePoints } from './Service'

import './App.scss';

function App() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null)

  const [bikepoints, setBikePoints] = useState({});
  const [selectedBikePoint, setSelectedBikePoint] = useState(null);

  const [showBikePoint, setShowBikePoint] = useState(false);

  const CycleHireObject = {
    props: {
      name: 'Cycle Hire'
    },
    handler: () => {
      setShowBikePoint(true);
    }
  }

  const onTermSubmit = async (term: string) => {
    (async (term) => {
      const bikepoints = await getBikePoints(term)

      setBikePoints(bikepoints)
    })(term)
  };

  const onBikePointSelect = (bikepoint: any) => {
    setSelectedBikePoint(bikepoint);
  };

  const onServiceSelect = (service: any) => {
    setSelectedService(service);
  }

  useEffect(() => {
    (async () => {
      const services = await getServices();
      setServices(services)
    })()
  }, [])

  return (
    <main className="main ui container" data-testid="main-container">
      <article className='ui grid'>
        <Header />
        <Sidebar onServiceSelect={onServiceSelect} services={services} cycleHire={CycleHireObject} />
        <ServiceDetail className={showBikePoint ? 'eight wide column' : 'twelve wide column'} service={selectedService} />
        {showBikePoint &&
          <section className='four wide column'>
            <SearchBar onFormSubmit={onTermSubmit} />
            <BikePointList onBikePointSelect={onBikePointSelect} bikepoints={bikepoints} />
          </section>
        }
      </article>
    </main>
  );
}

export default App;
