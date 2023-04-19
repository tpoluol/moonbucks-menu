const $ = (selector) => document.querySelector(selector);

function App() {
  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      const $menuName = e.target.closest('li').querySelector('.menu-name');

      const menuName = $menuName.innerText;
      const updatedMenuName = prompt('메뉴명을 수정하세요.', menuName);
      $menuName.innerText = updatedMenuName;
    }
  });

  const menuItemTemplate = (espressoMenuName) => {
    return `<li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
      </li>`;
  };
  // form 태그 자동전송 막음
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const AddMenuName = () => {
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요.');
      return;
    }
    const espressoMenuName = $('#espresso-menu-name').value;
    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuItemTemplate(espressoMenuName)
    );
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`;
    $('#espresso-menu-name').value = '';
  };

  // menu 입력
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    AddMenuName();
  });

  $('.input-submit').addEventListener('click', () => {
    AddMenuName();
  });
}

App();
