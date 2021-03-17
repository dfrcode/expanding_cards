/*
        <div class="expanding_cards_box">
            <div class="expanding_cards_box_list">
                <div class="expanding_cards_box_list_item"></div>
                <div class="expanding_cards_box_list_item"></div>
                <div class="expanding_cards_box_list_item"></div>
                <div class="expanding_cards_box_list_item"></div>
                <div class="expanding_cards_box_list_item"></div>
            </div>
        </div>
*/

const num = 5

const app = document.querySelector('.app'),
    boxListExpandingCards = createElem('div', 'expanding_cards_box', app),
    listExpandingCards = createElem('div', 'expanding_cards_box_list', boxListExpandingCards)

function createListItems(num, arrListItems = []) {
    for (let i = 0; i < num; i++) {
        itemListExpandingCards = createElem('div', 'expanding_cards_box_list_item', listExpandingCards)
        arrListItems.push(itemListExpandingCards)
    }

    return arrListItems
}

const items = createListItems(num)

items.forEach((item, idx) => {

    if (idx === 0) {
        item.classList.add('active')
        item.textContent = idx + 1
    }

    if (idx !== items.length - 1) {
        item.classList.add('margin_item')
    }

    item.addEventListener('click', () => {
        removeActiveClass()
        item.classList.add('active')
        item.textContent = idx + 1
    })
})

function removeActiveClass() {
    items.forEach(item => {
        item.classList.remove('active')
        item.textContent = ''
    })
}

function createElem(element, className, parent) {
    const el = document.createElement(element)
    el.classList.add(className)
    parent.appendChild(el)

    return el
}