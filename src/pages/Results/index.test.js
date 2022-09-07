import {formatQueryParams, formatJobList} from './';

describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('The formatQueryParams function', () => {
    it('should make correct url parameters from the answer', () => {
        const answer = {1: false, 2: false, 3: false, 4: false, 5: false, 6: true};
        const expectedState = 'a1=false&a2=false&a3=false&a4=false&a5=false&a6=true';
        expect(formatQueryParams(answer)).toEqual(expectedState);
    })
    it('should make incorrect url parameters from the answer', () => {
        const answer = {1: 4, 2: false, 3: 5, 4: false, 5: false, 6: true};
        const expectedState = 'a1=4&a2=false&a3=5&a4=false&a5=false&a6=true';
        expect(formatQueryParams(answer)).toEqual(expectedState);
    })
})
  