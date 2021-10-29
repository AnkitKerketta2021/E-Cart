const products = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Sofa",
        price: "14,399"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Chair",
        price: "1,579"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Camera",
        price: "19,599"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Bag",
        price: "6,199"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Laptop",
        price: "34,799"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Headphone",
        price: "3,459"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Macbook",
        price: "1,13,459"
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1498480086004-2400bd8c3663?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "flower Vase",
        price: "1,250"
    },
    {
        id: 9,
        img: "https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?b=1&k=20&m=187310279&s=170667a&w=0&h=5Fc9XC5hfvpffZwfE-BzK6DcajqdN3sQjnPJa-Z0Rnk=",
        name: "Lather Shoes",
        price: "2,450"
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Red Nike Shoes",
        price: "4,449"
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1593632717071-218c1d85c663?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2xvYmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Globe",
        price: "1,600"
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Watch 1",
        price: "13,250"
    },
    {
        id: 13,
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Watch 2",
        price: "31,950"
    },
    {
        id: 14,
        img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Bleu Perfume",
        price: "2,690"
    },
    {
        id: 15,
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyZnVtZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "N 5 Chanel Perfume",
        price: "7,250"
    },
    {
        id: 16,
        img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Speaker",
        price: "4,380"
    },
    {
        id: 17,
        img: "https://images.unsplash.com/photo-1558098329-a11cff621064?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Acaustic Guitar",
        price: "8,345"
    },
    {
        id: 18,
        img: "https://images.unsplash.com/photo-1550985616-10810253b84d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Electric Guitar",
        price: "7,299"
    },
    {
        id: 19,
        img: "https://media.istockphoto.com/photos/orange-sunglasses-on-white-background-picture-id976794274?b=1&k=20&m=976794274&s=170667a&w=0&h=pC_HKznIbxFkSNS0g-VcISIHiq6obt7y6kf4I8uT-RY=",
        name: "Sun Glass",
        price: "1,150"
    },
    {
        id: 20,
        img: "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Round Sun Glass",
        price: "1,750"
    },
    {
        id: 22,
        img: "https://images.unsplash.com/photo-1625772452888-ca36edeaf3a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJpbW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Trimmer",
        price: "5,599"
    },
    {
        id: 23,
        img: "https://media.istockphoto.com/photos/blue-armchair-isolated-on-a-white-picture-id1281696939?b=1&k=20&m=1281696939&s=170667a&w=0&h=H-nKNA5fpSpBHI6IP1u-YEs4Xf6rANu9O9hIj9nrYnM=",
        name: "Single Sofa",
        price: "3,290"
    },

];
export default products;
