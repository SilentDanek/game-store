import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {GameCard} from './GameCard';
import {ImgHTMLAttributes} from "react";

jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @next/next/no-img-element
    default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img alt={props.alt} {...props} />,
}));

describe('GameCard component', () => {

    const mockProps = {
        cardMedia: 'image.jpg',
        cardTitle: 'Game Title',
        cardDescription: 'Game description goes here.',
        price: 59.99,
        rating: 4.5,
        tags: ['Action', 'Adventure'],
        discount: {
            discountedPrice: 49.99,
            percentage: 0.1,
        },
    };


    it('renders correctly with the given props', () => {
        render(<GameCard {...mockProps} />);

        // Проверяем, что изображение и текст присутствуют
        expect(screen.getByAltText('Game Title')).toBeInTheDocument();
        expect(screen.getByText('Game Title')).toBeInTheDocument();
        expect(screen.getByText('Game description goes here.')).toBeInTheDocument();
        expect(screen.getByText('Action')).toBeInTheDocument();
        expect(screen.getByText('Adventure')).toBeInTheDocument();
        expect(screen.getByText('$59.99')).toBeInTheDocument();
    });

    it('have the correct href', () => {
        render(<GameCard {...mockProps} />);

        const gameLink = screen.getByTestId('game-link');

        expect(gameLink).toHaveAttribute('href', '/game/game-title');
    });

    it('displays the correct discounted price', () => {
        render(<GameCard {...mockProps} />);

        // Проверяем, что отображается цена со скидкой
        expect(screen.getByText('$49.99')).toBeInTheDocument();
    });


    it('does not display discounted price if no discount is provided', () => {
        const propsWithoutDiscount = { ...mockProps, discount: null };
        render(<GameCard {...propsWithoutDiscount} />);

        // Проверяем, что цена без скидки отображается корректно
        expect(screen.getByText('$59.99')).toBeInTheDocument();
    });
});
