
const cards = [
    {
    id: 'card-1',
    title : 'Learning react.js props',
    button: 'in-Progress',
    }, 
    {
        id: 'card-2',
        title : 'watching ucl final',
        button: 'in-Progress',
    }, 
    {
        id: 'card-3',
        title: 'attending ukele class',
        button: 'in-Progress',
    }, 

]

const data =  {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'To Do',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'Doing',
            cards: [
                {
                id: 'card-4',
                title: 'meetup with friends',
                button:'doing',
                },
                {
                    id: 'card-5',
                    title: 'grocery shopping',
                    button: 'doing',
                },
            ],
        },
        'list-3': {
            id: 'list-3',
            title: 'Done',
            cards: [
                {
                id: 'card-6',
                title: 'play fifa',
                
                },
                {
                    id: 'card-7',
                    title: 'water the plants',
                },
            ],
        },
    },
    listIds: ['list-1','list-2','list-3'], 
    //,'list-2'
}

export default data;
