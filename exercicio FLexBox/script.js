const quadradoAzul = document.querySelector('.quadradoAzul');


for (let i = 0; i < 50; i++){
    const estrela = document.createElement('div');
    estrela.className = 'estrela'
    quadradoAzul.appendChild(estrela);
    
}

const bandeiraEua = document.querySelector('.bandeiraEua');

for (let i = 0; i < 6; i++){
    const fx_vermelho = document.createElement('div');
    fx_vermelho.className = 'fx_vermelho'
    bandeiraEua.appendChild(fx_vermelho);
    const fx_branca = document.createElement('div');
    fx_branca.className = 'fx_branca'
    bandeiraEua.appendChild(fx_branca);
} 
const fx_vermelho = document.createElement('div');
    fx_vermelho.className = 'fx_vermelho'
bandeiraEua.appendChild(fx_vermelho);
    





// for (let i = 0; i < 6; i++){
//     const fx_vermelho = document.createElement('div');
//     fx_vermelho.className = 'fx_vermelho'
//     bandeiraEua.appendChild(fx_vermelho);
//     const fx_branca = document.createElement('div');
//     fx_branca.className = 'fx_branca'
//     bandeiraEua.appendChild(fx_branca);
// } 
// const fx_vermelho = document.createElement('div');
//     fx_vermelho.className = 'fx_vermelho'
//     bandeiraEua.appendChild(fx_vermelho);