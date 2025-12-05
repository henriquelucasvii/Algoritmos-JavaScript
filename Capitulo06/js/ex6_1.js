const form = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; // declara vetor global

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.querySelector("#inPaciente").value;
  pacientes.push(nome); // adiciona o nome no final do vetor
  let lista = "";
  // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respLista.innerText = lista; // exibe a lista dos pacientes na página
  form.inPaciente.value = ""; // limpa contéudo do campo de formulario
  form.inPaciente.focus(); // posiciona o curso no campo
});

// adiciona um "ouvinte" para o evento click no buttonUrgencia que está no form
form.buttonUrgencia.addEventListener("click", () => {
  // verifica se as validaçoes do form estão ok(no caso, paciente is required)
  if (!form.checkValidity()) {
    alert(`Informe o nome do paciente a ser atendido em caráter de urgência`);
    form.inPaciente.focus();
    return; // retorna ao form
  }
  const nome = document.querySelector("#inPaciente").value;
  pacientes.unshift(nome); // adiciona paciente ao inicio do vetor
  let lista = "";
  // forEach alicado sobre o array pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista; // exibe a lista de pacientes na página
  form.inPaciente.value = "";
  form.inPaciente.focus();
});

form.buttonAtender.addEventListener("click", () => {
  // se o tamanho do vetor = 0
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    form.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift(); // remove do inicio da fila (e obtem nome)
  respNome.innerText = atender; // exibe o nome do paciente em atendimento
  let lista = "";
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista; // exibe a lista de pacientes na página
});
