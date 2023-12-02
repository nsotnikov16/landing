<section class="section check">
    <div class="page__container check__container">
        <div class="page__left">
            <h1 class="title check__title">Нужно проверить форму?</h1>
            <img class="check__img" src="./images/check.svg">
        </div>
        <div class="page__right check__right">
            <form class="form" id="form">
                <h3 class="form__title">Не вопрос! Заполни данные и отправь их к себе на почту</h3>
                <div class="form__row">
                    <label for="form-name" class="form__label">Как тебя зовут? <span>*</span></label>
                    <input id="form-name" type="text" name="name" minlength="2" maxlength="30" required class="form__input" placeholder=" " pattern="[А-Яа-яЁё\s]+" title="Пожалуйста, используйте только русские буквы при вводе">
                </div>
                <div class="form__row">
                    <label for="form-email" class="form__label">Твой email <span>*</span></label>
                    <input id="form-email" type="email" name="email" minlength="2" maxlength="60" required class="form__input" placeholder=" ">
                </div>
                <div class="form__row">
                    <select name="city" class="form__select">
                        <option value="">Твой город</option>
                        <option value="surgut">Сургут</option>
                        <option value="nefteyugansk">Нефтеюганск</option>
                        <option value="khanty-mansiysk">Ханты-Мансийск</option>
                    </select>
                </div>
                <div class="form__row">
                    <div class="form__radio">
                        <input type="radio" name="status" id="form-status-student" value="student">
                        <label for="form-status-student">Студент</label>
                    </div>
                    <div class="form__radio">
                        <input type="radio" name="status" id="form-status-teacher" value="teacher">
                        <label for="form-status-teacher">Преподаватель</label>
                    </div>
                </div>
                <button class="btn form__btn">Отправить</button>
            </form>
        </div>
    </div>
</section>