# ASCENSÃO ESTUDOS

## Iniciar
1. Abra a pasta com VS Code e use **Live Server**, ou publique o conteúdo da pasta no GitHub Pages. Não abra `index.html` diretamente por `file://` (módulos ES).
2. Sem Firebase, o site funciona e salva o progresso no navegador local.

## Firebase (obrigatório para login e sincronização)
1. Crie um projeto no Firebase Console e adicione um **aplicativo Web**.
2. Copie `apiKey`, `authDomain`, `projectId`, `appId` para `js/firebase-config.js`.
3. Em Authentication > Sign-in method, ative **Google** e defina o email de suporte.
4. Em Authentication > Settings > Authorized domains, autorize o domínio de hospedagem, por exemplo `seuusuario.github.io`.
5. Crie o banco **Cloud Firestore** e publique o conteúdo de `firestore.rules` na aba Rules.
6. Hospede com HTTPS (GitHub Pages funciona) e teste login e sincronização em dois dispositivos.

## Regras do jogo
- Questões são embaralhadas a cada tentativa; alternativas também.
- O erro mostra explicação imediatamente; a rodada prossegue até o fim.
- Qualquer erro reinicia a rodada ao final; só 100% libera a conquista e XP.
- Questões discursivas exigem autoavaliação com resposta-modelo; não existe correção automática sem backend.
- XP: 100 + 10 por questão ao concluir uma rodada perfeita. Nível sobe a cada 200 XP.
- Progresso local é salvo em `localStorage`. Ao entrar numa conta com progresso já existente, os dados da conta na nuvem prevalecem.

## Conteúdo
Banco inicial de 13 matérias/grupos, baseado em tópicos recebidos e revisão complementar. Módulos marcados **Revisão** são complementares, pois nem todas as páginas do material escolar foram enviadas. A plataforma é extensível editando `js/questions.js`. Questões originais, não transcrições de apostila.

## Segurança
A configuração Web do Firebase é pública por natureza; a proteção real é feita pelas regras do Firestore. Nunca coloque chaves de serviço/admin no frontend. Cada usuário acessa apenas o próprio progresso.
