import { CARS } from '../../app/shared/CARS';
import { FEATUREDCARS } from '../../app/shared/FEATUREDCAR';

export const selectALLCars = () => {
    return CARS;
};

export const selectCarsById = (id) => {
    return CARS.find((car) => car.id === parseInt(id));
};

export const selectFeaturedCars = () => {
    return FEATUREDCARS.find((car) => car.featured);
};