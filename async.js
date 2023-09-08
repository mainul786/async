const loadUser = () =>{
    const url =`https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.results[0]))
        .catch(error => console.log(error));
}


const displayData = users => {
    console.log(users);
}

const loadUserDataAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await (res.json());
        displayUser(data.results);
    }
    catch(error){
        console.log(error)
    }
}


const displayUser = users => {
    console.log(users[0]);
}

loadUserDataAsync();