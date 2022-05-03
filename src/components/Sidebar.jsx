import { array } from 'prop-types'
import SidebarItem from './SidebarItem'

const Sidebar = ({ services, onServiceSelect, cycleHire }) => {
  const { props, handler } = cycleHire;
  const compareFn = (a, b) => a.modeName < b.modeName ? -1 : 1;

  return (
    <aside className="four wide column">
      <div className='ui middle aligned selection list'>
        {
          services.sort(compareFn).map((service) => {
            const { id } = service;

            return (
              <SidebarItem
                key={id}
                onServiceSelect={onServiceSelect}
                service={service}
              />
            )
          })
        }
        <SidebarItem
          key='bike-point'
          onServiceSelect={handler}
          service={props}
        />
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  data: array,
}

Sidebar.defaultProps = {
}

export default Sidebar
