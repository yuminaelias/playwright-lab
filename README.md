# Laboratório G3 — Playwright

## Requisitos
Node.js LTS e npm; ligação à Internet para instalar dependências e Chromium.

## Instalação
```powershell
npm install
npx playwright install chromium
```

## Executar aplicação
```powershell
npm run start
```
Aceder a http://127.0.0.1:5173 . Terminar com Ctrl+C.

## Testes
```powershell
npm test
npm run test:ui
npm run report
```
O ficheiro `tests/funcionais.spec.js` inclui **um teste intencionalmente falhado** (último cenário, modo com defeitos). Isto é esperado: o teste revela um defeito real na validação de campos obrigatórios. Os outros quatro testes devem passar no modo correcto.

## Exercício
1. Executar os testes e registar 4 PASS / 1 FAIL (se o ambiente estiver correctamente configurado).
2. Explicar por que motivo o último teste falha.
3. Criar mais dois testes: senha errada no modo com defeitos; pesquisa de produto no modo com defeitos.
4. Entregar ficheiros de teste, captura do relatório e explicação dos defeitos.

**Nota:** não usar dados pessoais reais. As credenciais `admin@g3.test` / `Teste123!` são exclusivamente didácticas.
