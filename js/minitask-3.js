const body = document.body
const formWrapper = document.createElement("form")

const title = document.createElement("h1")
title.textContent = "Survey Perokok Koda"

const formList = [{
  label: 'Name',
  name: 'name',
  element: 'input',
  type: 'text'
}, {
  label: 'Umur',
  name: 'umur',
  element: 'input',
  type: 'number'
}, {
  label: 'Jenis Kelamin',
  name: 'gender',
  element: 'input',
  type: 'radio',
  inputs: [{
    id: 'L',
    label: 'Laki-laki'
  }, {
    id: 'P',
    label: 'Perempuan'
  }]
}, {
  label: 'Apakah anda seorang perokok?',
  name: 'smoker',
  element: 'select',
  options: [{
    value: false,
    label: 'Silahkan Pilih'
  }, {
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }]
}, {
  label: 'Brand rokok yang digunakan?',
  name: 'cigarette',
  element: 'input',
  type: 'checkbox',
  inputs: [{
    id: 'sampoerna',
    label: 'Sampoerna'
  }, {
    id: 'gg',
    label: 'Gudang Garam'
  }, {
    id: 'djarum',
    label: 'Djarum Super'
  }, {
    id: 'marlboro',
    label: 'Marlboro'
  }]
}]

formWrapper.appendChild(title)

formList.forEach(form => {
  const wrapper = document.createElement("div")
  const label = document.createElement("label")
  label.setAttribute("for", form.name)
  label.textContent = form.label

  wrapper.appendChild(label)

  if (form.type === 'radio' || form.type === 'checkbox') {
    for (const radio of form.inputs) {
      const inputRadio = document.createElement("input")
      inputRadio.setAttribute("type", form.type)
      inputRadio.setAttribute("name", form.name)
      inputRadio.setAttribute("id", radio.id)

      const labelRadio = document.createElement("label")
      labelRadio.setAttribute("for", radio.id)
      labelRadio.textContent = radio.label

      wrapper.append(inputRadio, labelRadio)
    }
  } else if (form.element === 'select') {
    const selectForm = document.createElement("select")
    selectForm.setAttribute("name", form.name)
    selectForm.setAttribute("id", form.name)

    for (const option of form.options) {
      const options = document.createElement("option")
      if (!option.value) {
        options.setAttribute("disabled", true)
        options.setAttribute("selected", true)
      }
      options.setAttribute("value", option.value)
      options.textContent = option.label

      selectForm.appendChild(options)
    }
    wrapper.appendChild(selectForm)
  } else {
    const input = document.createElement("input")
    input.setAttribute("type", form.type)
    input.setAttribute("name", form.name)
    input.setAttribute("id", form.name)
    wrapper.appendChild(input)
  }


  formWrapper.appendChild(wrapper)
})

body.appendChild(formWrapper)