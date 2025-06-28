export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido. Use POST." });
    }

    const { servico } = req.body;

    if (!servico) {
        return res.status(400).json({ error: "Serviço obrigatório." });
    }

    let numero = "";

    if (servico === "Manicure") {
        numero = "5532991397354";
    } else if (servico === "Estética") {
        numero = "5532999442535";
    } else {
        return res.status(400).json({ error: "Serviço inválido." });
    }

    const mensagem = `Olá! Quero agendar ${servico}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    return res.status(200).json({ url });
}