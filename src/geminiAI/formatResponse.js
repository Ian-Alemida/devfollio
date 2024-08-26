function formatResponse(text) {
  // Substituir negrito
  let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Substituir listas
  formatted = formatted.replace(/\* (.*?)\n/g, "<li>$1</li>");

  // Adicionar tags de lista não ordenada
  formatted = formatted.replace(/<\/li>\n<li>/g, "</li><li>");
  formatted = formatted.replace(/<li>(.*?)<\/li>/g, "<ul><li>$1</li></ul>");

  // Adicionar parágrafos
  formatted = formatted.replace(/([^\n]+)\n/g, "<p>$1</p>");

  return formatted;
}

module.exports = { formatResponse };
