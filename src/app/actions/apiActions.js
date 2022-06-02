import {API_COUPONS_GET} from './types';
let categories = [
  {
    id: 1,
    name: 'Авто',
    description:
      'Выгодное топливо на АЗС, шиномонтаж, услуги СТО, магазины автозапчастей.',
    theme: {
      primary: '#FFEBE5',
      secondary: '#000000',
    },
    icon: null,
    coupons: [
      {
        id: 1,
        type: 'coupon',
        name: 'Скидка на АЗС ГазпромНефть',
        description: '200 рублей на заправку',
        text: '<h1>Test h1</h1><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h2>Test h2</h2><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type tex</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><table><tr><td>Заголовок 1</td><td>Заголовок 2</td></tr><tr><td>Значение 1</td><td>Значение 2</td></tr></table><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h3>Test h3</h3><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p>',
        coupon: '1-3LWU70K3',
      },
      {
        id: 2,
        type: 'link',
        name: 'Альфа-Карта с кэшбэком',
        description: '1000 рублей за первую покупку',
        text: '',
        coupon: '1-3LWU70K3',
      },
    ],
  },
  {
    id: 2,
    name: 'Еда',
    description: 'Кафе и рестораны, бары, доставка еды.',
    theme: {
      primary: '#A7D9F6',
      secondary: '#FFFFFF',
    },
    icon: null,
    coupons: [
      {
        id: 1,
        type: 'coupon',
        name: 'Скидка на АЗС ГазпромНефть',
        description: '200 рублей на заправку',
        text: '<h1>Test h1</h1><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h2>Test h2</h2><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type tex</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><table><tr><td>Заголовок 1</td><td>Заголовок 2</td></tr><tr><td>Значение 1</td><td>Значение 2</td></tr></table><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h3>Test h3</h3><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p>',
        coupon: '1-3LWU70K3',
      },
    ],
  },
  {
    id: 3,
    name: 'Развлечения',
    description: 'Кино, боулинг, для всей семьи, квесты.',
    theme: {
      primary: '#E5DBFF',
      secondary: '#FFFFFF',
    },
    icon: null,
    coupons: [
      {
        id: 1,
        type: 'coupon',
        name: 'Скидка на АЗС ГазпромНефть',
        description: '200 рублей на заправку',
        text: '<h1>Test h1</h1><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h2>Test h2</h2><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type tex</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><table><tr><td>Заголовок 1</td><td>Заголовок 2</td></tr><tr><td>Значение 1</td><td>Значение 2</td></tr></table><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h3>Test h3</h3><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p>',
        coupon: '1-3LWU70K3',
      },
    ],
  },
  {
    id: 4,
    name: 'Спорт',
    description: 'Фитнес, танцы, бассейн, магазины спортивных товаров.',
    theme: {
      primary: '#DAF6F4',
      secondary: '#000000',
    },
    icon: null,
    coupons: [
      {
        id: 1,
        type: 'coupon',
        name: 'Скидка на АЗС ГазпромНефть',
        description: '200 рублей на заправку',
        text: '<h1>Test h1</h1><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h2>Test h2</h2><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type tex</p><hr><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><table><tr><td>Заголовок 1</td><td>Заголовок 2</td></tr><tr><td>Значение 1</td><td>Значение 2</td></tr></table><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><h3>Test h3</h3><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p><p style="font-size: 16px; margin-bottom: 20px;">Lorep ipsum Скидка на АЗС ГазпромНефть, текст в несколько на строк на русском и английском. This is test type text</p>',
        coupon: '1-3LWU70K3',
      },
    ],
  },
];
export const getCoupons = () => dispatch => {
  dispatch({
    type: API_COUPONS_GET,
    payload: categories,
  });
};
