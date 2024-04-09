import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface Pizza {
    price: number;
    diameter: number;
    radius: number;
    area: number;
    pricePerArea: number;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface PizzaInput {
    pizza: Pizza;
    setPizza: Dispatch<SetStateAction<Pizza>>;
}

const PizzaInput = ({ pizza, setPizza }: PizzaInput) => {

    useEffect(() => {
        const newRadius = pizza.diameter / 2;
        const newArea = Math.PI * Math.pow(newRadius, 2);
        const newPricePerArea = pizza.price / newArea;
        const newPizza = { ...pizza, radius: newRadius, area: newArea, pricePerArea: newPricePerArea };
        setPizza(newPizza);
    }, [pizza.diameter, pizza.price]);

    const handlePriceChange = (e: InputChangeEvent) => {
        const newPrice = Number(e.target.value);
        setPizza(prevPizza => ({ ...prevPizza, price: newPrice }));
    };

    const handleDiameterChange = (e: InputChangeEvent) => {
        const newDiameter = Number(e.target.value);
        setPizza(prevPizza => ({ ...prevPizza, diameter: newDiameter }));
    };

    return (
        <div>
            <div className="relative">
                <input className='text-accent-50 pl-8' type="number" placeholder="price" value={pizza.price} onChange={handlePriceChange} />
                <span className="absolute text-accent-50 left-2 top-1/2 transform -translate-y-1/2">$</span>
            </div>
            <div className="relative">
                <input className='text-accent-50 pl-8' type="number" placeholder="Diameter" value={pizza.diameter} onChange={handleDiameterChange} />
                <span className="absolute text-accent-50 left-2 top-1/2 transform -translate-y-1/2">cm</span>
            </div>
        </div>
    );
};

const PizzaOutput = ({ ...pizza }: Pizza) => {
    return (
        <div className='text-center text-accent-25'>
            <p>Price: {pizza.price.toFixed(2)} €</p>
            <p>Diameter: {pizza.diameter.toFixed(2)} cm</p>
            <p>Radius: {pizza.radius.toFixed(2)} cm</p>
            <p>Area: {pizza.area.toFixed(2)} cm²</p>
            <p>Price per area: {pizza.pricePerArea.toFixed(3)} €/cm²</p>
        </div>
    );
}

const ComparePizza = ({ pizza1, pizza2 }: { pizza1: Pizza, pizza2: Pizza }) => {
    let smallerPizza, largerPizza;

    if (pizza1.area < pizza2.area) {
        smallerPizza = pizza1;
        largerPizza = pizza2;
    } else {
        smallerPizza = pizza2;
        largerPizza = pizza1;
    }

    const priceOfLargerPizza = smallerPizza.pricePerArea * largerPizza.area;
    const moneySaved = priceOfLargerPizza - largerPizza.price;
    const discountPercentage = (moneySaved / priceOfLargerPizza) * 100;

    return (
        <div className='col-span-4 text-center text-accent-25' >
            <p>The price of the larger pizza, based on the size of the smaller pizza, would be: {priceOfLargerPizza.toFixed(2)} €</p>
            <p>You save: {moneySaved.toFixed(2)} € by buying the larger pizza</p>
            <p>That's a discount of {discountPercentage.toFixed(2)}%</p>

        </div>
    )
};

export default function PizzaCalc() {
    const [pizzaProps1, setPizzaProps1] = useState<Pizza>({ price: 0, diameter: 0, radius: 0, area: 0, pricePerArea: 0 });
    const [pizzaProps2, setPizzaProps2] = useState<Pizza>({ price: 0, diameter: 0, radius: 0, area: 0, pricePerArea: 0 }); 

    return (
        <div className="grid grid-cols-4">
            <h1 className="col-span-4 text-center">Pizza Calc</h1>
            <div className='col-span-2 flex justify-center items-center flex-col'>
                <PizzaInput pizza={pizzaProps1} setPizza={setPizzaProps1} />
                <PizzaOutput {...pizzaProps1} />
            </div>
            <div className='col-span-2 flex justify-center items-center flex-col'>
                <PizzaInput pizza={pizzaProps2} setPizza={setPizzaProps2} />
                <PizzaOutput {...pizzaProps2} />
            </div>

            <ComparePizza pizza1={pizzaProps1} pizza2={pizzaProps2} />

        </div>
    );
}