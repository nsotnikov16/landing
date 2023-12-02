class Popup {
    constructor() {
        this._popupElement = document.querySelector('.popup');
        this._closeButton = this._popupElement.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this)
        this.setEventListeners()
    }

    open() {
        document.body.style.overflow = "hidden";
        this._popupElement.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.body.style.overflow = "visible";
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.keyCode === 27) {
            this.close();
        }
    }

    _handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    clearContent() {
        this._popupElement.querySelector('.popup__content').innerHTML = '';
    }

    addContent(content) {
        this._popupElement.querySelector('.popup__content').insertAdjacentHTML('beforeend', content);
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}

class App {
    headerBtn = document.querySelector('.header__btn');
    form = document.getElementById("form");

    constructor() {
        this.setListenerHeaderBtn();
        this.setListenerForm();
        this.setListenerTest4();
        this.popup = new Popup();
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

    setListenerForm() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => { e.preventDefault(); this.showDataForm(); });
    }

    showDataForm() {
        if (!this.form.checkValidity()) return;
        const fields = this.form.querySelectorAll('select, input');
        let html = `<div class="content">`;
        fields.forEach(field => {
            const value = field.value
            if (!value) return;
            if (field.type == 'radio' && !field.checked) return;
            switch (field.name) {
                case 'name':
                    html += `<p>Вы ввели имя: ${value}</p>`
                    break;
                case 'email':
                    html += `<p>Вы ввели email: ${value}</p>`
                    break;
                case 'city':
                    html += `<p>Вы выбрали город: ${value}</p>`
                    break;
                case 'status':
                    html += `<p>Вы выбрали статус: ${value}</p>`
                    break;
                default:
                    html += `<p>Значение поля с именем ${field.name}: ${value}</p>`
                    break;
            }
        })
        html += '</div>';
        this.popup.clearContent();
        this.popup.addContent(html);
        this.popup.open();
    }

    setError(message) {
        throw new Error(message);
    }
}


new App();