const BASE_URL = 'http://192.168.2.106:3000/'
const DATA_Port = 'http://localhost:3000/'
// const API_KEY=

// const getSpecializations=()=>{['Cate1', 'Cate2', 'Cate3']}
const getSpecializations = async () => {
    try {
        const response = await fetch(BASE_URL + 'specialization', {
            // headers: { 'Authorization': `Bearer ${API_KEY}` }, // Include headers if needed
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const specs = await response.json();
        return(specs); // Process the fetched data here
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};


const getSpecialization = async (spec) => {
    try {
        const response = await fetch(BASE_URL + 'specialization', {
            // headers: { 'Authorization': `Bearer ${API_KEY}` }, // Include headers if needed
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const spec = await response.json();
        return(spec); // Process the fetched data here
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// const getSpecializations = () => {
//     // Simulating an asynchronous API call with a timeout
//     return new Promise((resolve, reject) => {
//         // Mock response data
//         const specializations = [
//             {
//                 "id": 1,
//                 "attributes": {
//                     "Name": "Dentist",
//                     "createAt": "2023-09-30T23:49:10.670Z",
//                     "updateAt": "2023-09-30T23:49:10.670Z",
//                     "publishAt": "2023-09-30T23:49:10.670Z",
//                     "Icon": {
//                         "data": {
//                             "id": 3,
//                             "attributes": {
//                                 "name": "tooth.png",
//                                 "width": 128,
//                                 "height": 128,
//                                 "hash": "tooth",
//                                 "url": "https://t4.ftcdn.net/jpg/05/01/65/27/360_F_501652770_XII6uRuqyIzTTGQKbrtS7M3gtVL0kESH.jpg",
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 "id": 2,
//                 "attributes": {
//                     "Name": "Orthopedic",
//                     "createAt": "2023-09-30T23:49:10.670Z",
//                     "updateAt": "2023-09-30T23:49:10.670Z",
//                     "publishAt": "2023-09-30T23:49:10.670Z",
//                     "Icon": {
//                         "data": {
//                             "id": 4,
//                             "attributes": {
//                                 "name": "body.png",
//                                 "width": 128,
//                                 "height": 128,
//                                 "hash": "body",
//                                 "url": "https://cdn1.iconfinder.com/data/icons/human-body-parts-1-3/100/a-23-512.png",
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 "id": 3,
//                 "attributes": {
//                     "Name": "Neurologist",
//                     "createAt": "2023-09-30T23:49:10.670Z",
//                     "updateAt": "2023-09-30T23:49:10.670Z",
//                     "publishAt": "2023-09-30T23:49:10.670Z",
//                     "Icon": {
//                         "data": {
//                             "id": 4,
//                             "attributes": {
//                                 "name": "brain.png",
//                                 "width": 128,
//                                 "height": 128,
//                                 "hash": "brain",
//                                 "url": "https://static.vecteezy.com/system/resources/previews/010/752/414/original/neurology-icon-design-free-vector.jpg",
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 "id": 4,
//                 "attributes": {
//                     "Name": "Cardiologist",
//                     "createAt": "2023-09-30T23:49:10.670Z",
//                     "updateAt": "2023-09-30T23:49:10.670Z",
//                     "publishAt": "2023-09-30T23:49:10.670Z",
//                     "description": "",
//                     "Icon": {
//                         "data": {
//                             "id": 5,
//                             "attributes": {
//                                 "name": "tooth.png",
//                                 "width": 128,
//                                 "height": 128,
//                                 "hash": "heart",
//                                 "url": "https://cdn4.vectorstock.com/i/1000x1000/48/33/cardiology-icon-with-heart-and-cardiogram-vector-4054833.jpg",
//                             }
//                         }
//                     }
//                 }
//             }];

//         // Simulating an API call delay using setTimeout (replace this with your actual API call)
//         setTimeout(() => {
//             resolve(specializations); // Resolve the Promise with the data
//             // In an actual API call, you'd perform something like:
//             // fetch(`${BASE_URL}/specializations`, {
//             //   headers: {
//             //     'Authorization': `Bearer ${API_KEY}`
//             //   }
//             // }).then(response => response.json()).then(data => resolve(data))
//             //   .catch(error => reject(error));
//         }, 200); // Simulating a delay of 1 second (1000 milliseconds)
//     });
// };


// const getSpecialization = () => {
//     // Simulating an asynchronous API call with a timeout
//     return new Promise((resolve, reject) => {
//         // Mock response data
//         const specializations =
//         {
//             "id": 1,
//             "attributes": {
//                 "Name": "Dentist",
//                 "createAt": "2023-09-30T23:49:10.670Z",
//                 "updateAt": "2023-09-30T23:49:10.670Z",
//                 "publishAt": "2023-09-30T23:49:10.670Z",
//                 "Icon": {
//                     "data": {
//                         "id": 3,
//                         "attributes": {
//                             "name": "tooth.png",
//                             "width": 128,
//                             "height": 128,
//                             "hash": "tooth",
//                             "url": "https://t4.ftcdn.net/jpg/05/01/65/27/360_F_501652770_XII6uRuqyIzTTGQKbrtS7M3gtVL0kESH.jpg",
//                         }
//                     }
//                 }
//             }
//         };
//         // Simulating an API call delay using setTimeout (replace this with your actual API call)
//         setTimeout(() => {
//             resolve(specializations); // Resolve the Promise with the data
//             // In an actual API call, you'd perform something like:
//             // fetch(`${BASE_URL}/specializations`, {
//             //   headers: {
//             //     'Authorization': `Bearer ${API_KEY}`
//             //   }
//             // }).then(response => response.json()).then(data => resolve(data))
//             //   .catch(error => reject(error));
//         }, 200); // Simulating a delay of 1 second (1000 milliseconds)
//     });
// };


const getHighRated = async () => {
    try {
        const response = await fetch(BASE_URL + 'doctors' , {
            // headers: { 'Authorization': `Bearer ${API_KEY}` }, // Include headers if needed
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }
        const doctors = await response.json();
        // const highRatedDoctors = doctors.filter(doctor => doctor.rating > 4);

        const formattedDoctors = doctors.map((doctor, index) => {
            return {
                id: index + 1,
                attributes: {
                    id:doctor._id,
                    email: doctor.email,
                    FirstName: doctor.firstName,
                    LastName: doctor.lastName,
                    Specialization: doctor.specialization,
                    Description: doctor.description,
                    Rating: doctor.rating.toString(), // Convert rating to string
                    Address: doctor.address // Assuming 'address' property exists in the doctor object
                }
            };
        });

        return formattedDoctors; // Process the fetched data here
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const bookAppointment = async (data) => {
    const post_data = {
        userId: data.userId,
        doctorId: data.doctorId,
        time: data.dateTime,
        startTime: data.dateTime,
        endTime: data.dateTime,
        // Add other properties as needed
    };

    try {
        const response = await fetch(BASE_URL + 'appointments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers like authorization if required
            },
            body: JSON.stringify(post_data),
        });
        console.log(response)
        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        // console.log('Response Data:', responseData); // Handle the response data here
    } catch (error) {
        console.error('Error posting data:', error.message);
    }
};



const getDoctorsBySpecialization = async (specialization) => {
    try {
        const response = await fetch(BASE_URL + 'doctors' , {
            // headers: { 'Authorization': `Bearer ${API_KEY}` }, // Include headers if needed
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const doctors = await response.json();
        console.log("special:", specialization)
        console.log("doctor:", doctors)
        
        // const highRatedDoctors = doctors.filter(doctor => doctor.rating > 4);
        const doctorsWithSpecialization = doctors.filter(doctor =>
            doctor.specialization.includes(specialization)
        );
        console.log("spec:", doctorsWithSpecialization)
        const formattedDoctors = doctorsWithSpecialization.map((doctor, index) => {
            return {
                id: index + 1,
                attributes: {
                    email: doctor.email,
                    id:doctor._id,
                    FirstName: doctor.firstName,
                    LastName: doctor.lastName,
                    Specialization: doctor.specialization,
                    Description: doctor.description,
                    Rating: doctor.rating.toString(), // Convert rating to string
                    Address: doctor.address // Assuming 'address' property exists in the doctor object
                }
            };
        });

        return formattedDoctors; // Return the doctors with the specified specialization
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
};


const getHighRated1 = () => {
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
        }, 200); // Simulating a delay of 1 second (1000 milliseconds)
    });
};

const getUserAppointments1 = async (userId, role) => {
    try {
        const response = await fetch(BASE_URL + 'appointments/' + role + '/' + userId);
        
        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const appointments = await response.json();

        const formatedAppointments = await Promise.all(appointments.map(async (appointment, index) => {
            try {
                const userresponse = await fetch(BASE_URL + 'users/' + appointment.userId);
                const user = await userresponse.json();

                return {
                    id: index + 1,
                    attributes: {
                        userId: appointment.userId,
                        doctorId: appointment.userId,
                        userName: user.userName,
                        doctorName: appointment.doctorName,
                        // Add other properties based on your appointment object
                        startTime: appointment.startTime,
                        status: appointment.status
                    }
                };
            } catch (error) {
                console.error('Error fetching user data:', error.message);
                return null;
            }
        }));

        // Filter out appointments where user data fetch failed
        const validAppointments = formatedAppointments.filter(appointment => appointment !== null);

        return validAppointments;
    } catch (error) {
        console.error('Error fetching appointments:', error.message);
        return [];
    }
};




const getUserAppointments = ()=>{
    return new Promise((resolve, reject) => {
        // Mock response data
        const appointments = [
            {
                "id": 1,
                "attributes": {
                    "userId": "1",
                    "doctorId": "1",
                    "doctorName": "The Doctor",
                    "Address" : "Thai Nguyen", 
                    "startTime":  "2023-11-22T09:30:00",
                    "status": "pending"
                }
            },
            {
                "id": 2,
                "attributes": {
                    "userId": "1",
                    "doctorId": "1",
                    "doctorName": "The Doctor",
                    "Address" : "Thai Nguyen",
                    "startTime":  "2023-11-22T09:30:00",
                    "status": "pending"
                }
            },
            {
                "id": 3,
                "attributes": {
                    "userId": "1",
                    "doctorId": "1",
                    "doctorName": "The Doctor",
                    "Address" : "Thai Nguyen",
                    "startTime":  "2023-11-22T09:30:00",
                    "status": "pending"
                }
            },
            {
                "id": 4,
                "attributes": {
                    "userId": "1",
                    "doctorId": "1",
                    "doctorName": "The Doctor",
                    "Address" : "Thai Nguyen",
                    "startTime":  "2023-11-22T09:30:00",
                    "status": "pending"
                }
            },
            {
                "id": 5,
                "attributes": {
                    "userId": "1",
                    "doctorId": "1",
                    "doctorName": "The Doctor",
                    "Address" : "Thai Nguyen",
                    "startTime":  "2023-11-22T09:30:00",
                    "status": "pending"
                }
            }
        ];

        // Simulating an API call delay using setTimeout (replace this with your actual API call)
        setTimeout(() => {
            resolve(appointments); // Resolve the Promise with the data
            // In an actual API call, you'd perform something like:
            // fetch(`${BASE_URL}/specializations`, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`
            //   }
            // }).then(response => response.json()).then(data => resolve(data))
            //   .catch(error => reject(error));
        }, 200); // Simulating a delay of 1 second (1000 milliseconds)
    });
}



export default {
    DATA_Port,
    BASE_URL,
    // getAllSpecs,
    getDoctorsBySpecialization,
    getSpecializations,
    getHighRated,
    getSpecialization,
    getUserAppointments,
    bookAppointment,
    getUserAppointments1
}


