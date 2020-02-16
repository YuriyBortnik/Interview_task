import $ from "jquery";

const modal = (el, act) => {
    $(el).click(() => {
        $('.modal')[act]('open');
    });
}

const checked = () => {
    $(document).on('change', '.js-check', function () {
        const modalBlock = $(this).closest('.modal__block');
        if (this.checked) {
            modalBlock.addClass('active');
            modalBlock.find('.modal__input').prop("disabled", false);
        } else {
            modalBlock.removeClass('active');
            modalBlock.find('.modal__input').prop("disabled", true);
        }

        $('.modal__radio-input').each(function (i, el) {
            if (el.checked) modalBlock.data('act', el.value);
        });
    });
}

const typeInputs = () => {
    $(document).on('blur', '.js-input', function () {
        let result = 0;
        const modalBlock = $(this).closest('.modal__block');
        const modalResult = $(this).closest('.modal__block').find('.modal__result');
        const inputs = $(this).closest('.modal__block').find('.js-input');
        const total = $('.modal__result');
        if (filterArray(inputs)) {
            if (modalBlock.data('act') === 'add') result = inputs[0].valueAsNumber + inputs[1].valueAsNumber + inputs[2].valueAsNumber;
            else result = inputs[0].valueAsNumber * inputs[1].valueAsNumber * inputs[2].valueAsNumber;
            modalResult.text(result);
        } else modalResult.text('');
        totalResult(total);
    });
}

const filterArray = (el) => {
    const check = $(el).filter(function () {
        return $.trim($(this).val()).length === 0
    }).length == 0;
    return check;
}

const totalResult = (el) => {
    let num = 0;
    $(el).each(function () {
        num += Number(this.innerText);
        $('.modal__total-result').text(num);
    });

}

export {modal, checked, typeInputs}