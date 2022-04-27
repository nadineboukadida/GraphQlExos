export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todo: [
        {
            id:"1",
            name: "learn GraphQL",
            content:"learning",
            status:"IN_PROGRESS",
            user:1
        },
        {
            id:"2",
            name: "go out",
            content:"fun",
            status:"WAITING",
            user: 1
        },
        {
            id:"3",
            name: "eat dinner",
            content:"pizza",
            status:"CANCELED",
            user:2
        },
        {
            id:"4",
            name: "learn Nestjs",
            content:"learning",
            status:"DONE",
            user:3
        },

    ],
    users: [
        {
            id:1,
            name:"nadine boukadida",
            email:"nadine@gmail.com",
        },
        {
            id:2,
            name:"salem hamdani",
            email:"salem@gmail.com",
        },

    ]
}
