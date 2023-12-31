import { render, screen } from '@testing-library/react';
import Button from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  test('render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  test('Call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });
  test('disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });
  test('match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button text="Load more" disabled={true} onClick={fn} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
