import ref from 'vue'

const produtos = ref([
  {
    id: 1,
    titulo: "Blusa Preta Básica",
    imagem: "/produtos/blusapretafem.png",
    descricao: "Blusa preta versátil, ideal para compor looks casuais em qualquer estação.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 2,
    titulo: "Calça Jeans",
    imagem: "/produtos/calcajeansfem.png",
    descricao: "Calça jeans feminina confortável e fácil de combinar com diferentes estilos.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 3,
    titulo: "Calça Rosa",
    imagem: "/produtos/calcarosafem.png",
    descricao: "Calça rosa com visual moderno, perfeita para produções cheias de personalidade.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 4,
    titulo: "Conjunto Azul",
    imagem: "/produtos/conjuntoazulfem.png",
    descricao: "Conjunto azul feminino, ideal para quem busca conforto e estilo.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 5,
    titulo: "Conjunto Branco",
    imagem: "/produtos/conjuntobrancofem.png",
    descricao: "Conjunto branco elegante e versátil para diversas ocasiões.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 6,
    titulo: "Cropped Amarelo",
    imagem: "/produtos/croppedamarelofem.png",
    descricao: "Cropped amarelo leve e moderno, perfeito para dias mais quentes.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 7,
    titulo: "Cropped Azul",
    imagem: "/produtos/croppedazulfem.png",
    descricao: "Cropped azul com modelagem confortável e visual despojado.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 8,
    titulo: "Cropped de Crochê Rosa",
    imagem: "/produtos/croppedcrocherosafem.png",
    descricao: "Cropped de crochê rosa com acabamento delicado e cheio de charme.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 9,
    titulo: "Cropped Rosa",
    imagem: "/produtos/croppedrosafem.png",
    descricao: "Cropped rosa feminino, ideal para compor looks leves e modernos.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 10,
    titulo: "Cropped Vermelho",
    imagem: "/produtos/croppedvermelhofem.png",
    descricao: "Cropped vermelho que traz destaque e personalidade ao visual.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 11,
    titulo: "Jaqueta Jeans",
    imagem: "/produtos/jaquetajeansfem.png",
    descricao: "Jaqueta jeans clássica, perfeita para complementar qualquer look.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 12,
    titulo: "Calça Jeans Clara",
    imagem: "/produtos/jeansclarofem.png",
    descricao: "Calça jeans de lavagem clara com estilo casual e confortável.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 13,
    titulo: "Calça Jeans Escura",
    imagem: "/produtos/jeansescurofem.png",
    descricao: "Calça jeans escura, uma peça curinga para diversas combinações.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 14,
    titulo: "Moletom Amarelo",
    imagem: "/produtos/moletomamarelofem.png",
    descricao: "Moletom amarelo confortável, ideal para dias mais frios.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 15,
    titulo: "Saia Jeans",
    imagem: "/produtos/saiajeansfem.png",
    descricao: "Saia jeans feminina com modelagem versátil e atemporal.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 16,
    titulo: "Short Jeans",
    imagem: "/produtos/shortjeansfem.png",
    descricao: "Short jeans ideal para dias quentes e produções casuais.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 17,
    titulo: "Short de Moletom",
    imagem: "/produtos/shortmoletomfem.png",
    descricao: "Short de moletom macio e confortável para o dia a dia.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 18,
    titulo: "Vestido Amarelo",
    imagem: "/produtos/vestidoamarelofem.png",
    descricao: "Vestido amarelo leve, perfeito para ocasiões casuais e dias ensolarados.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 19,
    titulo: "Vestido Azul",
    imagem: "/produtos/vestidoazulfem.png",
    descricao: "Vestido azul com visual elegante e confortável.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 20,
    titulo: "Vestido Floral",
    imagem: "/produtos/vestidoflorfem.png",
    descricao: "Vestido estampado floral, ideal para um visual delicado e descontraído.",
    categoria: "Feminino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
{
    id: 21,
    titulo: "Bermuda Jeans",
    imagem: "/produtos/bermudajeansmasc.png",
    descricao: "Bermuda jeans masculina com visual casual e confortável para o dia a dia.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 22,
    titulo: "Bermuda Moletom",
    imagem: "/produtos/bermudamoletommasc.png",
    descricao: "Bermuda de moletom masculina, ideal para momentos de lazer e conforto.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 23,
    titulo: "Calça Cargo",
    imagem: "/produtos/calcacargomasc.png",
    descricao: "Calça cargo masculina com bolsos funcionais e estilo moderno.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 24,
    titulo: "Calça Jeans",
    imagem: "/produtos/calcajeansmasc.png",
    descricao: "Calça jeans masculina versátil, perfeita para diversas ocasiões.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 25,
    titulo: "Camisa Azul",
    imagem: "/produtos/camisaazulmasc.png",
    descricao: "Camisa azul masculina com design clássico e fácil de combinar.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 26,
    titulo: "Camisa Branca",
    imagem: "/produtos/camisabrancamasc.png",
    descricao: "Camisa branca masculina, uma peça essencial para qualquer guarda-roupa.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 27,
    titulo: "Camisa Estampada",
    imagem: "/produtos/camisaestampadamasc.png",
    descricao: "Camisa estampada masculina para quem busca um visual descontraído.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 28,
    titulo: "Camisa Polo",
    imagem: "/produtos/camisapolomasc.png",
    descricao: "Camisa polo masculina com estilo casual e elegante.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 29,
    titulo: "Camiseta Básica",
    imagem: "/produtos/camisetabasicamasc.png",
    descricao: "Camiseta básica masculina, ideal para compor looks do dia a dia.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 30,
    titulo: "Jaqueta",
    imagem: "/produtos/jaquetamasc.png",
    descricao: "Jaqueta masculina confortável e versátil para dias mais frios.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 31,
    titulo: "Moletom",
    imagem: "/produtos/moletommasc.png",
    descricao: "Moletom masculino confeccionado para oferecer conforto e estilo.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 32,
    titulo: "Regata",
    imagem: "/produtos/regatamasc.png",
    descricao: "Regata masculina leve, perfeita para dias quentes e atividades ao ar livre.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 33,
    titulo: "Short Esportivo",
    imagem: "/produtos/shortesportivomasc.png",
    descricao: "Short masculino ideal para práticas esportivas e momentos de lazer.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 34,
    titulo: "Suéter",
    imagem: "/produtos/suetermasc.png",
    descricao: "Suéter masculino confortável, ideal para dias de temperatura amena.",
    categoria: "Masculino",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
    {
    id: 35,
    titulo: "Tênis Branco",
    imagem: "/produtos/tenisbranco.png",
    descricao: "Tênis branco versátil, ideal para o dia a dia e fácil de combinar com diferentes looks.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 36,
    titulo: "Tênis Preto",
    imagem: "/produtos/tenispreto.png",
    descricao: "Tênis preto com design clássico, proporcionando conforto e praticidade.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 37,
    titulo: "Tênis Esportivo",
    imagem: "/produtos/tenisesportivo.png",
    descricao: "Tênis esportivo confortável, ideal para caminhadas, treinos e uso diário.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 38,
    titulo: "Tênis Casual",
    imagem: "/produtos/teniscasual.png",
    descricao: "Tênis casual com visual moderno, perfeito para diversas ocasiões.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 39,
    titulo: "Sandália",
    imagem: "/produtos/sandalia.png",
    descricao: "Sandália confortável e prática para os dias mais quentes.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 40,
    titulo: "Chinelo",
    imagem: "/produtos/chinelo.png",
    descricao: "Chinelo leve e confortável para o uso diário.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 41,
    titulo: "Bota",
    imagem: "/produtos/bota.png",
    descricao: "Bota com design moderno, ideal para complementar diferentes estilos.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 42,
    titulo: "Sapato Social",
    imagem: "/produtos/sapatosocial.png",
    descricao: "Sapato social elegante, indicado para eventos e ocasiões especiais.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 43,
    titulo: "Sapatênis",
    imagem: "/produtos/sapatenis.png",
    descricao: "Sapatênis confortável que combina elegância e casualidade.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 44,
    titulo: "Papete",
    imagem: "/produtos/papete.png",
    descricao: "Papete prática e confortável, perfeita para o uso diário.",
    categoria: "Calçado",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
    {
    id: 45,
    titulo: "Boné Preto",
    imagem: "/produtos/bonepreto.png",
    descricao: "Boné preto com design versátil, ideal para complementar o visual no dia a dia.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 46,
    titulo: "Boné Branco",
    imagem: "/produtos/bonebranco.png",
    descricao: "Boné branco com estilo casual, perfeito para diversas ocasiões.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 47,
    titulo: "Bolsa Feminina",
    imagem: "/produtos/bolsafeminina.png",
    descricao: "Bolsa feminina prática e elegante para acompanhar diferentes looks.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 48,
    titulo: "Mochila",
    imagem: "/produtos/mochila.png",
    descricao: "Mochila espaçosa e confortável, ideal para estudos, trabalho ou passeios.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 49,
    titulo: "Cinto",
    imagem: "/produtos/cinto.png",
    descricao: "Cinto versátil que complementa diferentes estilos e ocasiões.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 50,
    titulo: "Óculos de Sol",
    imagem: "/produtos/oculosdesol.png",
    descricao: "Óculos de sol com design moderno, unindo estilo e proteção.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 51,
    titulo: "Relógio",
    imagem: "/produtos/relogio.png",
    descricao: "Relógio com visual clássico, ideal para complementar o look.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  },
  {
    id: 52,
    titulo: "Carteira",
    imagem: "/produtos/carteira.png",
    descricao: "Carteira prática e funcional, perfeita para organizar documentos e cartões.",
    categoria: "Acessório",
    tamanho: "",
    condicao: "Usado",
    marca: ""
  }
]);