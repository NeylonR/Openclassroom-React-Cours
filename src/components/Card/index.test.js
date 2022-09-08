import Card from "./";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Card element', () => {
    it('Should render whitout crash', async () =>{
        render (
            <Card/>
        )
    })
    it('Should render with an image', () => {
        render (
            <Card
            key={`189`}
            label={'jobString'}
            picture={'http://localhost:8000/images/4.jpeg'}
            title={'name'}
          />     
        )
        const img = screen.getByAltText('freelance');
        expect(img.src).toBe('http://localhost:8000/images/4.jpeg');
    })
    it('Should render with a title', () => {
        render (
            <Card
            key={`189`}
            label={'jobString'}
            picture={'http://localhost:8000/images/4.jpeg'}
            title={'name'}
          />     
        )
        expect(screen.getByRole('heading', {
            level:4, 
            text:'name'
        })).toBeTruthy()
    })
    it('Should change title while being favorite', () => {
        render (
            <Card
            key={`189`}
            label={'jobString'}
            picture={'http://localhost:8000/images/4.jpeg'}
            title={'name'}
          />     
        )
        const title = screen.getByRole('heading', {
            level:4, 
            text:'name'
        });
        fireEvent.click(title);
        expect(title.textContent).toBe('⭐️name⭐️')
    })
})

