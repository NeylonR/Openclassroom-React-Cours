import Results, { formatJobList, formatQueryParams } from './';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitForElementToBeRemoved, screen, render } from '@testing-library/react';

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,';
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
  });
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3';
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
  });
});

describe('The formatQueryParams function', () => {
  it('should make correct url parameters from the answer', () => {
    const answer = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: true,
    };
    const expectedState =
      'a1=false&a2=false&a3=false&a4=false&a5=false&a6=true';
    expect(formatQueryParams(answer)).toEqual(expectedState);
  });
  it('should make incorrect url parameters from the answer', () => {
    const answer = { 1: 4, 2: false, 3: 5, 4: false, 5: false, 6: true };
    const expectedState = 'a1=4&a2=false&a3=5&a4=false&a5=false&a6=true';
    expect(formatQueryParams(answer)).toEqual(expectedState);
  });
});

const resultsMockedData = [
  {
    title: 'seo',
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
];

const server = setupServer(
  rest.get('http://localhost:8000/results', (req, res, ctx) => {
    return res(ctx.json({ resultsData: resultsMockedData }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('The Results component', () => {
  test('should display the results after the data is loaded', async () => {
    render(<Results />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    const jobTitleElements = screen.getAllByTestId('job-title');
    expect(jobTitleElements[0].textContent).toBe('seo');
    expect(jobTitleElements.length).toBe(2);
    const jobDescriptionElements = screen.getAllByTestId('job-description');
    expect(jobDescriptionElements[1].textContent).toBe(
      resultsMockedData[1].description
    );
    expect(jobDescriptionElements.length).toBe(2);
  });
});
