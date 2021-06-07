import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';

const changeDeliveryDateButtonSelector = '[data-automation="change-delivery-date-button"]';
const calendarSelector = '[data-automation="calendar"]';

// Very basic test to check calendar shows when button is clicked
// Ideally there would be tests around selecting days, restricted days, cancelling, etc.
// In addition, visual regression tests would be good as part of browser-based testing

describe('choose delivery', () => {
  it('shows calendar model', async () => {
    const { container } = render(<App />);
    const changeDeliveryDateButton = container.querySelector(changeDeliveryDateButtonSelector);
  
    expect(changeDeliveryDateButton).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(changeDeliveryDateButton!);
    });

    await waitFor(() => {
      const calendar = container.querySelector(calendarSelector);
      expect(calendar).toBeInTheDocument();
    });
  });
  
})