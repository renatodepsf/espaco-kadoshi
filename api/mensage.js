export default function handler(request, response) {
    if (request.method !== "POST") {
        return response.status(405).json({error: "Método não permitido. Use POST"});
    }

    const {nome, servico, whatsapp} = request.body;

    if (!nome || !servico || !whatsapp) {
        return response.status(400).json({error: "Todos os campos são obrigatórios"})
    }

    const numeroProfissional = "5532991397354";
    const mensagem = `Novo cadastro recebido:\n\nNome: ${nome}\nTelefone: ${whatsapp}\nServiço: ${servico}`;
    const url = `https://wa.me/${numeroProfissional}?text=${encodeURIComponent(mensagem)}`;

    return res.status(200).json({ url });
}