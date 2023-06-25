import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PostCard from '.';

const props = {
  title: 'title 1',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  test('render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(props.title)).toHaveAttribute(
      'src',
      props.cover,
    );

    expect(
      screen.getByRole('heading', { name: 'title 1' }),
    ).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  test('match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
