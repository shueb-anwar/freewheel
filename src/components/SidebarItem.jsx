import { DisruptionIcon , EveningServiceIcon } from './icons'

const SidebarItem = ({ service, onServiceSelect }) => {
    const { lineStatuses, serviceTypes } = service;

    const status = lineStatuses && lineStatuses.find(status => status.statusSeverity !== 10)
    const isEvening = serviceTypes && serviceTypes.find(service => service.name === 'Night')

    return (
        <div className='item' onClick={() => onServiceSelect(service)}>
            <div className="content">
                <div className="header">
                    {service.name}
                    {isEvening && <EveningServiceIcon data-testid="evening-icon" />} {status && <DisruptionIcon data-testid="disruption-icon" />}
                </div>
            </div>
        </div>
    )
}

export default SidebarItem;