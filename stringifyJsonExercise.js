// Sample JavaScrip Object

const dataObject = {

    user: {

        id: 1,

        name: "John Doe",

        email: "john@example.com",

        address: {

            city: "New York",

            zipcode: "10001"

        }

    },

    product: {

        id: 101,

        name: "Laptop",

        price: 999.99

    }

};

// use JSON.stringify() to convert the dataObject into JSON string
const stringJSON = JSON.stringify(dataObject);
// log resulting JSON string to console
console.log(stringJSON);