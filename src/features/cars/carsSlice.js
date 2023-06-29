import { CARS } from '../../app/shared/CARS';
import { FEATUREDCARS } from '../../app/shared/FEATUREDCAR';
import { CARPARTS } from '../../app/shared/CARPARTS';

export const selectALLCars = () => {
    return CARS;
};

export const selectCarById = (id) => {
    return CARS.find((car) => car.id === parseInt(id));
};

export const selectCarPartsById = (id) => {
    return CARPARTS.find((carparts) => carparts.id === parseInt(id));
};

export const selectFeaturedCars = () => {
    return FEATUREDCARS.find((car) => car.featured);
};
