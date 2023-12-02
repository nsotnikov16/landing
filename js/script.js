class App {
    headerBtn = document.querySelector('.header__btn');

    constructor() {
        this.changeLinks();
        this.setListenerHeaderBtn();
        this.setListenerTest4();
    }

    setListenerHeaderBtn() {
        if (!this.headerBtn) this.setError("Отсутствует кнопка в шапке сайта");
        this.headerBtn.addEventListener('click', this.handleClickHeaderBtn.bind(this));
    }

    handleClickHeaderBtn() {
        const res = Number(prompt(`За какую лабораторную работу вы хотите поставить оценку?\nОтвет укажите цифрой`));
        const url = "https://moodle.surgu.ru/mod/assign/view.php?id=";
        let id = 216323;
        switch (res) {
            case 2:
                id = 216324;
                break;
            case 3:
                id = 223773;
                break;
            case 4:
                id = 224976;
                break;
            case 5:
                id = 227614;
                break;
            case 6:
                id = 230747;
                break;
            case 7:
                id = 234597;
                break;
        }

        window.open(url + id, '_blank');
    }

    setListenerTest4() {
        this.conveyor = document.querySelector("#conveyor");
        this.theme = document.querySelector("#theme");
        this.clear = document.querySelector("#clear");

        if (this.conveyor) this.conveyor.addEventListener('click', this.turnOnConveyor.bind(this));
        if (this.theme) this.theme.addEventListener('click', this.changeTheme.bind(this));
        if (this.clear) this.clear.addEventListener('click', this.clearPage.bind(this));
    }

    turnOnConveyor() {
        setInterval(() => {
            const elements = document.body.querySelectorAll("header, section, footer");
            elements[elements.length - 1].insertAdjacentElement('afterend', elements[0]);
        }, 500);
    }

    changeTheme() {
        document.body.classList.toggle('change');
    }

    clearPage() {
        document.body.innerHTML = '';
    }

    changeLinks() {
        const a = document.querySelectorAll('a');
        a.forEach(el => {
            const href = el.getAttribute('href');
            if (href[0] == '#' && document.getElementById(`${href}`)) return;
            el.setAttribute('href', '/' + href);
        })
    }

    setError(message) {
        throw new Error(message);
    }
}

new App();