import { Task } from 'src/app/entities/task';

export const TASKS: Task[] = [
    {
        canceled: false,
        complete: false,
        date: '1563785944',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        title: 'Wakeup'
    },
    {
        canceled: false,
        complete: true,
        date: '1563785971',
        description: 'Pellentesque viverra commodo nunc, eu sodales est mollis eget.',
        title: 'Enjoy breakfast'
    },
    {
        canceled: true,
        complete: false,
        date: '1563785993',
        description: 'While listening for child events is the recommended way to read lists of data.',
        title: 'Listen for value events'
    },
    {
        canceled: false,
        complete: false,
        date: '1563786138',
        description: 'You can use the Realtime Database Query class to retrieve data sorted by key, by value.',
        title: 'Sorting and filtering data'
    },
    {
        canceled: false,
        complete: false,
        date: '1563786185',
        description: 'To retrieve sorted data, start by specifying one of the order-by methods to determine how results are ordered:',
        title: 'Sort data'
    }
];
