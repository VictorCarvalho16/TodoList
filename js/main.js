const trabalhoNavbar = document.querySelector('#nav-trabalho');
const estudoNavbar = document.querySelector('#nav-estudo');
const pessoalNavbar = document.querySelector('#nav-pessoal');
const dadosTabela = document.querySelector('#table-todo');
const addTodoModalButtom = document.querySelector('#addTodo');

const trabalho = `
<tr class="linha">
    <th scope="row">1</th>
    <td>Fazer ToDo</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox1">
    </td>
</tr>
<tr class="linha">
    <th scope="row">2</th>
    <td>Fazer ToDo</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox2">
    </td>
</tr>`;
const estudo = `
<tr class="linha">
    <th scope="row">1</th>
    <td>Estudar JS</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox1">
    </td>
</tr>
<tr class="linha">
    <th scope="row">2</th>
    <td>Estudar React</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox2">
    </td>
</tr>`;
const pessoal = `
<tr class="linha">
    <th scope="row">1</th>
    <td>Ler Livro</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox1">
    </td>
</tr>
<tr class="linha">
    <th scope="row">2</th>
    <td>Assistir Mr. Robot</td>
    <td>07/02/2020</td>
    <td>
        <input type="checkbox" class="checkbox" id="checkbox2">
    </td>
</tr>`;

function activeClass(navItem) {

    trabalhoNavbar.classList.remove('active');
    estudoNavbar.classList.remove('active');
    pessoalNavbar.classList.remove('active');

    if(navItem == 1) {
        trabalhoNavbar.classList.add('active');
    } else if(navItem == 2) {
        estudoNavbar.classList.add('active');
    } else if(navItem == 3) {
        pessoalNavbar.classList.add('active');
    }
   
};

function showTable(navItem) {

    dadosTabela.innerHTML = '';
    if(navItem == 1) {
        dadosTabela.innerHTML = trabalho;
    } else if(navItem == 2) {
        dadosTabela.innerHTML = estudo;
    } else if(navItem == 3) {
        dadosTabela.innerHTML = pessoal;
    }
        
    createEventList();
}

function createEventList() {
    const checkboxList = document.querySelectorAll('.checkbox');
    
    checkboxList.forEach(event => {
        event.addEventListener('change', () => {
            if (event.checked) {
                event.closest('.linha').classList.add('table-success');                
            } else {
                event.closest('.linha').classList.remove('table-success');
            }
        })
    });

};

function main() {

    trabalhoNavbar.addEventListener('click', (event) => {
        event.preventDefault();
        activeClass(1);
        showTable(1);
    });

    estudoNavbar.addEventListener('click', (event) => {
        event.preventDefault();
        activeClass(2);
        showTable(2);
    });

    pessoalNavbar.addEventListener('click', (event) => {
        event.preventDefault();
        activeClass(3);
        showTable(3);
    });

    addTodoModalButtom.addEventListener('click', () => {
        let todoDescriptionModel = document.querySelector('#todoDescription');
        let todoWhenModel = document.querySelector('#todoWhen');
        let todoTypeModel = document.querySelector('#todoType');

        console.log(todoDescriptionModel.value);
        console.log(todoWhenModel.value);
        console.log(todoTypeModel.value);
        addTodoModalButtom.classList.add('hide');
    });


}

main();
