import { render } from '@testing-library/react';
import App from './App';
import Home from './Home';
import Trending from './Trending';
import Feedback from './Feedback';

test('loads home page', async () => {
  render(<Home url="/" />)
});

test('loads trending page', async () => {
  render(<Trending url="/trending" />)
});

test('loads feedback page', async () => {
  render(<Feedback url="/feedback" />)
});