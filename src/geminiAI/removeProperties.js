function removeProperties(data) {
  // Mapeia sobre o array de objetos e retorna um novo array com os objetos modificados
  return data.map((item) => {
    // Desestrutura o objeto para separar as propriedades que queremos remover
    const { _id, img, link, ...rest } = item;
    // Retorna o objeto sem as propriedades _id e img
    return rest;
  });
}

module.exports = removeProperties;
