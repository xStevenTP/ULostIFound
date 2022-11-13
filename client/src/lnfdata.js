const [lost, setLost] = React.useState([]);
const [found, setFound] = React.useState([]);
let foundData = [];
let lostData = [];

const getBuildings = async (building) => {
    axios.get(`http://localhost:8080/found/${building}`)
    .then ((response) => {
        foundData = response.data;
        setFound(foundData);
        console.log(foundData);
        console.log(response.data);
        console.log(found);
    })
    axios.get(`http://localhost:8080/lost/${building}`)
    .then ((response) => {
        lostData = response.data;
        setLost(lostData);
        console.log(lost);
    });
}