const list = [];

const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.list-section .content');

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        list.push(...data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        view();
    }
}

getData();

addBtn.addEventListener('click', async(e) => {
    if(itemInput.value === '') return;
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: itemInput.value,
            body: '',
            userId: 1
        })
        });
        const newItem = await response.json();
        console.log(newItem);
        list.push(newItem);  
        

    } catch(error){
        console.error('Error adding item:', error);
    }
    itemInput.value = '';
    view();
});

const view = () => {
    itemList.innerHTML = '';
    list.forEach((item, index) => {
        itemList.innerHTML += `
            <div class="list-item flex">
                <p>${item.title}</p>
                <button onClick="deleteItem(${item.id}, ${index})">
                    X
                </button>
            </div>
        `;
    })
}

const deleteItem = async (id, index) => {
    console.log(id);
    
    try { 
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        list.splice(index, 1);
        view();

    }catch (error) {
        console.error('Error deleting item:', error);
    }
}

view();