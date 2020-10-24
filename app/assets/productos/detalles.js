const detalles =
{
    name: "Prestisimas",
    description: "Hamburguesa 150 gr de carne premium, ribs desmenuzadas en BBQ artesanal, crocante tocineta caramelizada y queso.",
    price: 34200,
    skip:
    {
        max: 5,
        mix: [
            { name: "Lechuga" },
            { name: "Tomate" },
            { name: "Cebolla" },
            { name: "Salsa de Tomate" },
            { name: "Mostaza" },
            { name: "Queso" },
            { name: "Ninguna Salsa" },
            { name: "Ribs Ahumadas" },
            { name: "Tocinetra Caramelizada" },]
    },
    sauces_extras:
    {
        max: 5,
        price: 3000,
        sauces: [
            { name: "Salsa Porthos por Aparte" },
            { name: "Chipotle por Aparte" },
            { name: "Ranch por Aparte" },
            { name: "Mayonesa de Ajo por Aparte" },
            { name: "BBQ por Aparte" },]
    },
    sauces:
    {
        sauces: [
            { name: "Mayonesa" },
            { name: "Ranch" },
            { name: "Mayonesa de Ajo" },
            { name: "Chipotle" },
            { name: "BBQ" },]
    },
    extras:
    {
        extra: [
            { price: 3000, name: "Salsa Porthos por Aparte" },
            { price: 3000, name: "Chipotle por Aparte" },
            { price: 3000, name: "Ranch por Aparte" },
            { price: 3000, name: "Mayonesa de Ajo por Aparte" },
            { price: 3000, name: "BBQ por Aparte" },]
    },
    drinks:
    {
        drink: [
            { price: 4200, name: "Coca-Cola Original 400 ml" },
            { price: 4200, name: "Coca-Cola Sin Azúcar 400 ml" },
            { price: 4200, name: "Sprite 400 ml" },
            { price: 4200, name: "Kola Román 400 ml" },]
    },
}


export default detalles;