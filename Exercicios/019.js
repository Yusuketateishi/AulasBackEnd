let serie = {
    titulo: 'Digital Circus',
    diretor: 'GlitchStudio',
    genero: 'Adventure',
    AnodeLancamento: '13/10/2023',
    NrTemporadas: 1,
    Episodios: [
        {temporada: 1, NrEpisodio: 1, titulo: 'PILOT' , duracao: '25:45'},
        {temporada: 1, NrEpisodio: 2, titulo: 'Candy Carrier Chaos' , duracao: '25:13'},
        {temporada: 1, NrEpisodio: 3, titulo: 'The Mystery of Mildenhall Manor' , duracao: '24:43'},
    ]
}

console.log(`O episódio ${serie.Episodios[0].titulo}, tem a duração de ${serie.Episodios[0].duracao}, e a temporada do ultimo episódio é ${serie.Episodios[2].temporada}.`);
