const API_URL = "https://68f53e90b16eb6f46836baec.mockapi.io/minhete/users";
const API_URL_VEICULOS = "https://68f53e90b16eb6f46836baec.mockapi.io/minhete/veiculos";

// Buscar usuários
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
};

// Buscar veículos
export const fetchCars = async () => {
  try {
    const response = await fetch(API_URL_VEICULOS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar Veículos:", error);
    return [];
  }
};

// Cadastro de usuários
export const registerUser = async (email, name, password) => {
  console.log("Tentando cadastrar");

  try {
    const users = await fetchUsers();

    const user = users.find((u) => u.email === email);

    if (user) {
      window.alert("Erro: Já existe um usuário com este email!");
      return null;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });

    console.log("Status da resposta:", response.status);
    const data = await response.json();

    window.alert("Usuário cadastrado com sucesso!");

    return data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return null;
  }
};

// Cadastro de veículo
export const RegisterVeiculo = async (placa, dt_entrada) => {
  console.log("Cadastrando veículo");

  try {
    const cars = await fetchCars();

    const car = cars.find((c) => c.placa === placa);

    if (car) {
      window.alert("Erro: Já existe um carro com esta placa!");
      return null;
    }

    const placaRegex = /^[A-Z]{3}-\d{4}$/;

    if (!placaRegex.test(placa)) {
      window.alert("Placa inválida! Digite no formato ABC-1234");
      return null;
    }

    const response = await fetch(API_URL_VEICULOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ placa, dt_entrada }),
    });

    const data = await response.json();

    window.alert("Veículo cadastrado com sucesso!");

    console.log("Status da resposta:", response.status);
    console.log("Resposta da API:", data);

    return data;
  } catch (error) {
    console.error("Erro ao cadastrar veículo:", error);
    return null;
  }
};

// Saída de veículo
export const saidaVeiculo = async (placa) => {
  try {
    const veiculos = await fetchCars();

    const veiculo = veiculos.find((car) => car.placa === placa);

    if (veiculo) {
      const response = await fetch(`${API_URL_VEICULOS}/${veiculo.id}`, {
        method: "DELETE",
      });

      window.alert("Veículo removido com sucesso!");
      return response;
    } else {
      window.alert("Erro: Placa incorreta.");
    }
  } catch (error) {
    console.error("Erro na saída:", error);
    return null;
  }
};
