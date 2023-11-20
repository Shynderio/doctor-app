const BASE_URL = ''

// const API_KEY=

// const getSpecializations=()=>{['Cate1', 'Cate2', 'Cate3']}

const getSpecializations = () => {
    // Simulating an asynchronous API call with a timeout
    return new Promise((resolve, reject) => {
        // Mock response data
        const specializations = [
            {
                "id": 1,
                "attributes": {
                    "Name": "Dentist",
                    "createAt": "2023-09-30T23:49:10.670Z",
                    "updateAt": "2023-09-30T23:49:10.670Z",
                    "publishAt": "2023-09-30T23:49:10.670Z",
                    "Icon": {
                        "data": {
                            "id": 3,
                            "attributes": {
                                "name": "tooth.png",
                                "width": 128,
                                "height": 128,
                                "hash": "tooth",
                                "url": "https://t4.ftcdn.net/jpg/05/01/65/27/360_F_501652770_XII6uRuqyIzTTGQKbrtS7M3gtVL0kESH.jpg",
                            }
                        }
                    }
                }
            },
            {
                "id": 2,
                "attributes": {
                    "Name": "Orthopedic",
                    "createAt": "2023-09-30T23:49:10.670Z",
                    "updateAt": "2023-09-30T23:49:10.670Z",
                    "publishAt": "2023-09-30T23:49:10.670Z",
                    "Icon": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "body.png",
                                "width": 128,
                                "height": 128,
                                "hash": "body",
                                "url": "https://cdn1.iconfinder.com/data/icons/human-body-parts-1-3/100/a-23-512.png",
                            }
                        }
                    }
                }
            },
            {
                "id": 3,
                "attributes": {
                    "Name": "Neurologist",
                    "createAt": "2023-09-30T23:49:10.670Z",
                    "updateAt": "2023-09-30T23:49:10.670Z",
                    "publishAt": "2023-09-30T23:49:10.670Z",
                    "Icon": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "brain.png",
                                "width": 128,
                                "height": 128,
                                "hash": "brain",
                                "url": "https://static.vecteezy.com/system/resources/previews/010/752/414/original/neurology-icon-design-free-vector.jpg",
                            }
                        }
                    }
                }
            },
            {
                "id": 4,
                "attributes": {
                    "Name": "Cardiologist",
                    "createAt": "2023-09-30T23:49:10.670Z",
                    "updateAt": "2023-09-30T23:49:10.670Z",
                    "publishAt": "2023-09-30T23:49:10.670Z",
                    "description": "",
                    "Icon": {
                        "data": {
                            "id": 5,
                            "attributes": {
                                "name": "tooth.png",
                                "width": 128,
                                "height": 128,
                                "hash": "heart",
                                "url": "https://cdn4.vectorstock.com/i/1000x1000/48/33/cardiology-icon-with-heart-and-cardiogram-vector-4054833.jpg",
                            }
                        }
                    }
                }
            }];

        // Simulating an API call delay using setTimeout (replace this with your actual API call)
        setTimeout(() => {
            resolve(specializations); // Resolve the Promise with the data
            // In an actual API call, you'd perform something like:
            // fetch(`${BASE_URL}/specializations`, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`
            //   }
            // }).then(response => response.json()).then(data => resolve(data))
            //   .catch(error => reject(error));
        }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    });
};


const getSpecialization = () => {
    // Simulating an asynchronous API call with a timeout
    return new Promise((resolve, reject) => {
        // Mock response data
        const specializations =
        {
            "id": 1,
            "attributes": {
                "Name": "Dentist",
                "createAt": "2023-09-30T23:49:10.670Z",
                "updateAt": "2023-09-30T23:49:10.670Z",
                "publishAt": "2023-09-30T23:49:10.670Z",
                "Icon": {
                    "data": {
                        "id": 3,
                        "attributes": {
                            "name": "tooth.png",
                            "width": 128,
                            "height": 128,
                            "hash": "tooth",
                            "url": "https://t4.ftcdn.net/jpg/05/01/65/27/360_F_501652770_XII6uRuqyIzTTGQKbrtS7M3gtVL0kESH.jpg",
                        }
                    }
                }
            }
        };
        // Simulating an API call delay using setTimeout (replace this with your actual API call)
        setTimeout(() => {
            resolve(specializations); // Resolve the Promise with the data
            // In an actual API call, you'd perform something like:
            // fetch(`${BASE_URL}/specializations`, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`
            //   }
            // }).then(response => response.json()).then(data => resolve(data))
            //   .catch(error => reject(error));
        }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    });
};

const getHighRated = () => {
    // Simulating an asynchronous API call with a timeout
    return new Promise((resolve, reject) => {
        // Mock response data
        const highrated = [
            {
                "id": 1,
                "attributes": {
                    "email": "thedoctor@doctor.com",
                    "FirstName": "The",
                    "LastName": "Doctor",
                    "Specialization": ["Dunos", "Dunos2"],
                    "Description": "I don't know this man",
                    "Rating": "4",
                    "Address": "Thai Nguyen, Viet Nam"
                }
            },
            {
                "id": 2,
                "attributes": {
                    "email": "thedoctor@doctor.com",
                    "FirstName": "Alice",
                    "LastName": "Johnson",
                    "Specialization": ["Pediatrics"],
                    "Description": "Passionate about providing care for children.",
                    "Rating": "4.9",
                    "Address": "Thai Nguyen, Viet Nam"
                }
            },
            {
                "id": 3,
                "attributes": {
                    "email": "thedoctor@doctor.com",
                    "FirstName": "Michael",
                    "LastName": "Brown",
                    "Specialization": ["Dermatology"],
                    "Description": "Skilled in treating various skin conditions.",
                    "Rating": "4.5",
                    "Address": "Thai Nguyen, Viet Nam"
                }
            },
            {
                "id": 4,
                "attributes": {
                    "email": "thedoctor@doctor.com",
                    "FirstName": "Emily",
                    "LastName": "Davis",
                    "Specialization": ["Oncology"],
                    "Description": "Committed to helping cancer patients.",
                    "Rating": "4.7",
                    "Address": "Thai Nguyen, Viet Nam"
                }
            }
        ];

        // Simulating an API call delay using setTimeout (replace this with your actual API call)
        setTimeout(() => {
            resolve(highrated); // Resolve the Promise with the data
            // In an actual API call, you'd perform something like:
            // fetch(`${BASE_URL}/specializations`, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`
            //   }
            // }).then(response => response.json()).then(data => resolve(data))
            //   .catch(error => reject(error));
        }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    });
};
export default {
    getSpecializations,
    getHighRated,
    getSpecialization
}


