import React from 'react';

interface HandleClickFn<T> {
    (value: T): void
}

interface ListProps<T> {
    items: T[]
    handleClick: HandleClickFn<T>
}

const List = <T extends string | number>({items, handleClick}: ListProps<T>) => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center w-full'>
            {items.map((item: T, index) => <div onClick={() => {
                handleClick(item)
            }} className={'cursor-pointer px-4 py-2 border border-solid border-green-300 w-[400px]'} key={index}>{item}</div>)}
        </div>
    );
};

export default List;