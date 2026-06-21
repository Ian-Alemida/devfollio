function formatResponse(text) {
  // Substituir títulos H1, H2 e H3
  let formatted = text.replace(/^# (.*)$/gm, "<h1>$1</h1>");
  formatted = formatted.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  formatted = formatted.replace(/^### (.*)$/gm, "<h3>$1</h3>");

  // Substituir negrito
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Substituir itálico
  formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Substituir código inline
  formatted = formatted.replace(/`(.*?)`/g, "<code>$1</code>");

  // Substituir listas
  formatted = formatted.replace(/^\* (.*)$/gm, "<li>$1</li>");

  // Agrupar itens de lista dentro de tags
  formatted = formatted.replace(/(<li>[\s\S]*?<\/li>)/gm, "<ul>$1</ul>");
  formatted = formatted.replace(/<\/ul>\s*<ul>/g, "");

  // Adicionar parágrafos
  formatted = formatted.replace(
    /^(?!<h[1-3]>|<\/?(ul|li|strong|em|code)>)([^\n]+)$/gm,
    "<p>$2</p>"
  );

  // Remover tags de parágrafo duplicadas dentro de listas e títulos
  formatted = formatted.replace(/<\/(h1|h2|h3|ul)>\n<p>/g, "</$1>\n");
  formatted = formatted.replace(/<\/p>\n<(h1|h2|h3|ul)>/g, "</p>\n<$1>");

  return formatted;
}

module.exports = { formatResponse };
