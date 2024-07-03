'use client';
import { useState } from "react";

interface AddToCartProps {
  maxCount?: number;
}

const AddToCart = ({ maxCount = Infinity }: AddToCartProps) => {
  const [count, setCount] = useState(1);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCount(() => {
      if (newValue < 1) return 1;
      if (newValue > maxCount) return maxCount;
      return newValue;
    });
  };

  return (
    <div className="flex">
      <div className="flex mr-8 items-center">
        <button
          className="size-12 rounded-l-full bg-gray-200 text-2xl font-bold disabled:text-gray-400"
          onClick={() => setCount(prevCount => prevCount > 1 ? prevCount -= 1 : prevCount)}
          disabled={count === 1}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          min={1}
          onChange={handleChangeInput}
          className="h-12 text-center bg-gray-200 max-w-full w-16"
        />
        <button
          className="size-12 rounded-r-full bg-gray-200 text-2xl font-bold disabled:text-gray-400"
          onClick={() => setCount(prevCount => prevCount < maxCount ? prevCount += 1 : maxCount)}
          disabled={count === maxCount}
        >
          +
        </button>
        {
          maxCount !== Infinity && (
            <span className="text-sm text-gray-500 ml-4">z {maxCount}</span>
          )
        }
      </div>
      <button className="bg-black text-white px-8 py-2 rounded-full">Dodaj do koszyka</button>
    </div >
  );
};
export default AddToCart;
