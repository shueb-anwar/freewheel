import { render, screen } from '@testing-library/react';
import ServiceDetail from './ServiceDetail';

describe('ServiceDetail Component', () => {
    test('renders no service disruption message', () => {
        const props = {
            service: {
                lineStatuses: []
            }, className: 'eight wide column'
        };

        render(<ServiceDetail {...props} />);
        const element = screen.getByText(/no service disruptions/i);
        expect(element).toBeInTheDocument();
    });


    test('renders test to select a service from list', () => {
        const props = { service: null, className: 'eight wide column' };

        render(<ServiceDetail {...props} />);
        const element = screen.getByText(/please select a service from the list/i);
        expect(element).toBeInTheDocument();
    });

});