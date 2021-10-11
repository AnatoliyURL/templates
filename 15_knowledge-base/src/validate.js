new JustValidate('.form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    fio: {
      required: true,
    },
    message: {
      required: true,
      minLength: 3
    }
  },
  messages: {
    message: {
      minLength: 'Минимум должно быть три символа',
      required: 'Обязательное поле для заполнения'
    },
    email: {
      required: 'Обязательное поле для заполнения',
      email: 'Введите корректный email'
    } ,
    fio: 'Обязательное поле для заполнения',
  },
});
