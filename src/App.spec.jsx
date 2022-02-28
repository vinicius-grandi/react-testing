import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  it('should render button', () => {
    render(<App />);
    expect(screen.getByTestId('add+1-button')).toBeInTheDocument();
  });

  it('should render list', () => {
    render(<App />)
    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it('should add on click', async () => {
    const { rerender } = render(<App />)
    const addButton = screen.getByTestId('add-item-button');
    const input = screen.getByPlaceholderText('item');

    userEvent.type(input, 'aaa')
    userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('aaa'))
        .toBeInTheDocument();
    }, {
      interval: 1000,
    });

    // expect(await screen.findByText('aaa'))
    //   .toBeInTheDocument();
  })
});
