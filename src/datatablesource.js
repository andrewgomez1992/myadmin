export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    },
},
{
    field: "email",
    headerName: "Email",
    width: 230,
},
{
    field: "age",
    headerName: "Age",
    width: 100,
},
{
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},

];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Rain",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "1rain@gmail.com",
        age: 22
    },
    {
        id: 3,
        username: "Rachel",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "passive",
        email: "3snow@gmail.com",
        age: 39
    },
    {
        id: 4,
        username: "Sunny",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "4sunny@gmail.com",
        age: 31
    },
    {
        id: 5,
        username: "Chris",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "pending",
        email: "chris@gmail.com",
        age: 28
    },
    {
        id: 6,
        username: "Jake",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "jake@gmail.com",
        age: 30
    },
    {
        id: 7,
        username: "Brandon",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "pending",
        email: "brandon@gmail.com",
        age: 35
    },
    {
        id: 8,
        username: "Ari",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "ari@gmail.com",
        age: 25
    },
    {
        id: 9,
        username: "Casey",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "casey@gmail.com",
        age: 33
    },
    {
        id: 10,
        username: "Jeff",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "jeff@gmail.com",
        age: 35
    },
    {
        id: 11,
        username: "James",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "james@gmail.com",
        age: 30
    },
    {
        id: 12,
        username: "Jon",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "jon@gmail.com",
        age: 34
    },
    {
        id: 13,
        username: "Cloee",
        img: "https://www.eikonphoto.com/wp-content/uploads/2015/09/professional-headshot.jpg",
        status: "active",
        email: "cloee@gmail.com",
        age: 33
    }

]