import { render, screen } from "@testing-library/react"
import Posts from "."

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1',
      cover: 'img/img2.png'
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      cover: 'img/img3.png'
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      cover: 'img/img32.png'
    }
  ]
}

describe('<Posts />', () => {
  test('render posts', () => {
    render(<Posts {...props} />)

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3)
    expect(screen.getAllByText(/body/i)).toHaveLength(3)
    expect(screen.getAllByAltText(/title/i)).toHaveLength(3)
    expect(screen.getByAltText('title 3')).toHaveAttribute('src', 'img/img32.png')

  })
  test('not render posts', () => {
    render(<Posts />)

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument()
  })
  test('match snapshot', () => {
    const { container } = render(<Posts {...props} />)

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
  })
})