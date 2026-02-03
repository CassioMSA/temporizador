⏱️ Countdown Timer (Class-Based)
Um temporizador regressivo modular construído com JavaScript puro, focado em boas práticas de Programação Orientada a Objetos (POO).

🚀 Funcionalidades Principais
Input Inteligente: Os campos de hora, minuto e segundo possuem foco automático (auto-skip) ao preencher dois dígitos.

Validação em Tempo Real: Bloqueio de caracteres não numéricos e limitação lógica (máximo de 59 para minutos/segundos).

Arquitetura Robusta: Utilização de classes ES6 com métodos encadeados e vinculação de escopo (bind).

Controle de Fluxo: Funções de iniciar, pausar e resetar integradas ao estado do objeto.

🛠️ Tecnologias
JavaScript (ES6+): Classes, módulos (import/export), manipulação de DOM e timers.

RegEx: Para filtragem de caracteres nos inputs.

CSS: Estilização de inputs numéricos e botões de controle.

📖 Como funciona a Classe
A classe Temporizador recebe um objeto de configuração que contém as referências dos botões e o objeto de estado do tempo. Ao iniciar, ela gerencia um setInterval que calcula a regressão temporal e atualiza os elementos do DOM via referência direta.
