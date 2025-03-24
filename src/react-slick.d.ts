declare module 'react-slick' {
    import { Component } from 'react';

    type Props = {
        dots?: boolean;
        arrows?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        cssEase?: string;
        pauseOnHover?: boolean;
        pauseOnFocus?: boolean;
        [key: string]: any;
    };

    export default class Slider extends Component<Props> {}
}