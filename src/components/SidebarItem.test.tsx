import { render, screen } from '@testing-library/react';
import SidebarItem from './SidebarItem';

describe('SidebarItem Component', () => {
    test('renders service with a service name', () => {
        const props = {
            service: {
                name: 'Test Service',
                lineStatuses: [],
                serviceTypes: []
            }, 
            onServiceSelect: () => {}
        };

        render(<SidebarItem {...props} />);
        const element = screen.getByText(/test service/i);
        expect(element).toBeInTheDocument();
    });


    test('renders service with disruption icon', () => {
        const props = {
            service: {
                name: 'Test Service',
                lineStatuses: [{
                    statusSeverity: 4
                }],
                serviceTypes: []
            },
            onServiceSelect: () => {}
        };

        render(<SidebarItem {...props} />);
        const element = screen.getByTestId('disruption-icon');
        expect(element).toBeInTheDocument();
    });

    test('renders service with evening icon', () => {
        const props = {
            service: {
                name: 'Test Service',
                lineStatuses: [],
                serviceTypes: [{
                    name: 'Night'
                }]
            },
            onServiceSelect: () => {}
        };

        render(<SidebarItem {...props} />);
        const element = screen.getByTestId('evening-icon');
        expect(element).toBeInTheDocument();
    });

});