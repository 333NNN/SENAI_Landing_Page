export function verificaCPF(cpfStr = "000.000.000-00") {

    const cpf = cpfStr.replace(/[^\d]/g, "");
  
    if (cpf.length !== 11) return false;
  
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    const calcVerificador = (base) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += base[i] * (base.length + 1 - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    const cpfNumeros = cpf.split("").map(Number);
    const verificador1 = calcVerificador(cpfNumeros.slice(0, 9));
    const verificador2 = calcVerificador(
      cpfNumeros.slice(0, 9).concat(verificador1)
    );
  
    return verificador1 === cpfNumeros[9] && verificador2 === cpfNumeros[10];
  }